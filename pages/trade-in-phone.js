import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";
import urlcat from "urlcat";
import { getNavBar } from "../utils/getNavBar";
import { Header } from "../components/Header";
import Pagination from "rc-pagination";
import { Footer } from "../components/Footer";
import SelectSearch from "react-select-search";
import { useUpdateEffect } from "react-use";
import Tippy from "@tippyjs/react/headless";
import { NextSeo } from "next-seo";
import { useAsync, useAsyncFn } from "react-use";
import pageCss from "!raw-loader!../styles/trade-page.css";

const conditionDescriptions = {
  ["LIKE NEW"]: "Pristine. No sign of use.",
  ["GOOD"]: "Normal Use. No visible or light scratch on screen.",
  ["FAIR"]: "Heavy Use. Visble scratch and/or dent.",
  ["CRACKED"]: "Front or Back cracked, but still fully functional.",
};

const conditionIdMap = {
  1: "selectedOption",
  2: "selectedCarrier",
  3: "selectedStorage",
  4: "selectedCondition",
};

const opreatorLogo = {
  ["AT&T"]: "/operator/att.png",
  ["Other"]: "/operator/other.png",
  ["Sprint"]: "/operator/sprint.png",
  ["T-Mobile"]: "/operator/tmobile.png",
  ["Unlocked"]: "/operator/unlocked.png",
  ["Verizon"]: "/operator/verizon.png",
};

function useMediaQuery(query) {
  const getMatches = (query) => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(false);

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}

export default function TradeInPhone({
  navbar,
  sellNavbar,
  appleList,
  sellAppleList,
  shortCutsData,
  products = [],
  conditionData,
}) {
  const router = useRouter();
  const [searchKey, setSearchKey] = useState("");
  const [visible, setVisible] = useState(false);
  const [searchKeys, setSearchKeys] = useState({
    selectedOption: ["Cash", "Trade-In"],
    selectedCarrier: "Unlocked",
    selectedStorage: conditionData.find((x) => x.id === 3)?.values[0]?.name,
    selectedCondition: "GOOD",
    searchKey: "",
    pageNum: 1,
  });

  const matchMedia = useMediaQuery("(min-width: 1280px");

  const [isInit, setIsInit] = useState(true);

  const getOptions = useCallback(async () => {
    if (!searchKey) return products;
    try {
      const productData = await fetch(
        urlcat("https://api.276qa.com/search/trade-in/host-list", {
          name: searchKey,
        })
      ).then((response) => response.json());

      if (!productData.success) return products ?? [];

      return productData.data.map((x) => ({ name: x, value: x }));
    } catch (error) {
      return products ?? [];
    }
  }, [products, searchKey]);

  const onOptionSelect = useCallback(
    (item) => {
      setSearchKeys((prev) => {
        switch (item.categoryId) {
          case 1:
            if (
              prev.selectedOption.length === 1 &&
              prev.selectedOption.some((x) => x === item.name)
            )
              return prev;
            const selectedOption = prev.selectedOption.some(
              (x) => x === item.name
            )
              ? prev.selectedOption.filter((x) => x !== item.name)
              : [...prev.selectedOption, item.name];
            return {
              ...prev,
              selectedOption,
            };
          case 2:
            return {
              ...prev,
              searchKey,
              selectedCarrier: item.name,
            };
          case 3:
            return {
              ...prev,
              searchKey,
              selectedStorage: item.name,
            };
          case 4:
            return {
              ...prev,
              searchKey,
              selectedCondition: item.name,
            };
        }
      });
    },
    [searchKey]
  );

  const [, addRank] = useAsyncFn(async (name) => {
    return fetch(
      urlcat("https://api.276qa.com/search/trade-in/:name/rank", { name }),
      {
        method: "PUT",
      }
    );
  }, []);

  const onSearchClick = useCallback(
    (name) => {
      if (!searchKey && !name) return;
      setIsInit(false);
      addRank();
      if (!searchKey) setSearchKey(name);
      setSearchKeys((prev) => ({
        ...prev,
        searchKey: name ?? searchKey,
      }));
    },
    [searchKey, addRank]
  );

  const { value: conditions = [] } = useAsync(async () => {
    try {
      if (!searchKeys.searchKey) return conditionData;

      const response = await fetch(
        urlcat("https://api.276qa.com/search/trade-in/category/all-category", {
          model: searchKeys.searchKey,
        })
      ).then((response) => response.json());

      if (!response.success) return conditionData;

      return response.data;
    } catch {
      return conditionData;
    }
  }, [searchKeys.searchKey, conditionData]);

  const {
    value: data = {
      count: 0,
      data: [],
      pageSize: 20,
      pageNum: 1,
    },
  } = useAsync(async () => {
    if (!searchKeys.searchKey)
      return {
        count: 0,
        data: [],
        pageSize: 20,
        pageNum: 1,
      };
    try {
      const conditions = [searchKeys.selectedCondition];
      const storages = [searchKeys.selectedStorage];
      const carriers = [searchKeys.selectedCarrier];
      const options = searchKeys.selectedOption;

      const body = {
        options,
        carriers,
        storages,
        conditions,
        searchKey: searchKeys.searchKey,
        pageNum: searchKeys.pageNum,
        pageSize: 20,
      };

      const listData = await fetch(
        "https://api.276qa.com/search/trade-in/search",
        {
          method: "POST",
          headers: {
            ["Content-Type"]: "application/json",
          },
          body: JSON.stringify(body),
        }
      ).then((response) => response.json());

      if (!listData.data)
        return {
          count: 0,
          data: [],
          pageSize: 20,
          pageNum: 1,
        };

      return listData;
    } catch {
      return {
        count: 0,
        data: [],
        pageSize: 20,
        pageNum: 1,
      };
    }
  }, [searchKeys, isInit]);

  useUpdateEffect(() => {
    setIsInit(!searchKey);

    setSearchKeys({
      selectedOption: ["Cash", "Trade-In"],
      selectedCarrier: "Unlocked",
      selectedStorage: conditionData.find((x) => x.id === 3)?.values[0]?.name,
      selectedCondition: "GOOD",
      searchKey: searchKey,
      pageNum: 1,
    });
  }, [searchKey]);

  useUpdateEffect(() => {
    const target = conditions.find((x) => x.id === 3)?.values[0]?.name;

    setSearchKeys((prev) => {
      if (prev.selectedStorage === target) return prev;
      return {
        ...prev,
        selectedStorage: target,
      };
    });
  }, [conditions]);

  useEffect(() => {
    if (!router?.query) return;
    const { modelName } = router.query;

    setSearchKey(modelName);
  }, [router]);

  console.log(data);
  return (
    <>
      <Head>
        <style
          amp-custom=""
          dangerouslySetInnerHTML={{
            __html: pageCss,
          }}
        />
      </Head>
      <Header navbar={navbar} sellNavbar={sellNavbar} hiddenSearch />
      <NextSeo
        title={`Find the Best Phone Trade-in and Cash BuyBack | UpTrade`}
        description="We find thousands of trade-in and cash buyback offers for you. Trade in or sell your phone for the most value."
        canonical={`${process.env.BASEURL}/trade-in-phone`}
      />
      <main className="sell-phone-page">
        <h1>Phone Trade-in and Cash BuyBack</h1>
        {isInit ? (
          <h2>
            To help you compare easily, UpTrade shows you both trade-in and cash
            buyback options from many companies. Our data covers but is not
            limited to Verizon, AT&T, T-Mobile, Apple, Samsung, BuyBack
            companies, etc.
          </h2>
        ) : null}

        <div
          className="search-content"
          style={{
            marginTop: isInit ? 110 : 24,
          }}
        >
          <SelectSearch
            options={products ?? []}
            value={searchKey}
            onChange={(key) => setSearchKey(key)}
            getOptions={getOptions}
            name="search"
            placeholder="Search phone model"
            search
            debounce={1000}
            renderValue={(props, snapshot, className) => {
              return (
                <input
                  {...props}
                  value={searchKey}
                  onChange={(event) => {
                    setSearchKey(event.target.value);
                    props.onChange(event);
                  }}
                  className={className}
                  onKeyDown={(event) => {
                    props.onKeyDown(event);
                    if (event.key === "Enter") {
                      onSearchClick();
                    }
                  }}
                />
              );
            }}
            renderOption={(optionsProps, optionData) => {
              return (
                <button
                  {...optionsProps}
                  onMouseDown={(event) => {
                    optionsProps.onMouseDown(event);
                    onSearchClick(optionData.name);
                  }}
                >
                  {optionData.name}
                </button>
              );
            }}
          />
          <button className="btn btn-primary search-button">Search</button>
          <svg
            className="form-search-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ display: isInit ? "none" : undefined }}
            onClick={() => onSearchClick()}
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </div>

        {isInit ? (
          <div className="shortcuts">
            <div>Shortcuts:</div>
            <div className="shortcuts-content">
              {shortCutsData?.map((x, index) => (
                <div
                  className="shortcut-link"
                  key={index}
                  onClick={() => onSearchClick(x.name)}
                >
                  {x.name}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {!isInit ? (
          <>
            <div className="choose-condition-title">
              Choose the criteria for your <strong>{searchKey}</strong>:
            </div>
            <div className="border" style={{ marginTop: 8 }} />

            <div className="conditions">
              {conditions?.map((condition, index) => {
                return (
                  <Fragment key={condition.id}>
                    <div className="condition-title">
                      {condition.name}
                      {condition.id === 4 ? (
                        <Tippy
                          render={(attrs) => (
                            <div
                              className="condition-tooltip"
                              tabIndex="-1"
                              {...attrs}
                            >
                              <div className="condition-description-item">
                                <div className="LIKE-NEW condition-card">
                                  LIKE NEW
                                </div>
                                <div className="description">
                                  {conditionDescriptions["LIKE NEW"]}
                                </div>
                              </div>
                              <div className="condition-description-item">
                                <div className="GOOD condition-card">GOOD</div>
                                <div className="description">
                                  {conditionDescriptions["GOOD"]}
                                </div>
                              </div>
                              <div className="condition-description-item">
                                <div className="FAIR condition-card">FAIR</div>
                                <div className="description">
                                  {conditionDescriptions["FAIR"]}
                                </div>
                              </div>
                              <div className="condition-description-item">
                                <div className="CRACKED condition-card">
                                  CRACKED
                                </div>
                                <div className="description">
                                  {conditionDescriptions["CRACKED"]}
                                </div>
                              </div>
                              <div className="condition-description-item">
                                <div className="condition-card"></div>
                                <div className="description tips">
                                  Tips: Most people choose <strong>Good</strong>
                                  .
                                </div>
                              </div>
                            </div>
                          )}
                          visible={visible}
                          onClickOutside={() => setVisible(false)}
                        >
                          <img
                            src="/svg/warning.svg"
                            alt=""
                            style={{ marginLeft: 8, cursor: "pointer" }}
                            onClick={() => setVisible(!visible)}
                          />
                        </Tippy>
                      ) : null}
                    </div>

                    <div className="condition-options">
                      {condition.values.map((option) => {
                        const selectedName =
                          searchKeys[conditionIdMap[condition.id]];

                        let isSelected = false;

                        if (Array.isArray(selectedName)) {
                          isSelected = selectedName.some(
                            (x) => x === option.name
                          );
                        } else {
                          isSelected = selectedName === option.name;
                        }
                        return condition.id === 4 && matchMedia ? (
                          <Tippy
                            key={option.categoryValueId}
                            render={(attrs) => {
                              return (
                                <div
                                  className="condition-description-tooltip"
                                  {...attrs}
                                >
                                  {conditionDescriptions[option.name]}
                                </div>
                              );
                            }}
                          >
                            <div
                              key={option.categoryValueId}
                              className={`condition-option ${
                                isSelected ? "selected" : ""
                              }`}
                              onClick={() => onOptionSelect(option)}
                            >
                              {option.name}
                            </div>
                          </Tippy>
                        ) : (
                          <div
                            key={option.categoryValueId}
                            className={`condition-option ${
                              isSelected ? "selected" : ""
                            }`}
                            onClick={() => onOptionSelect(option)}
                          >
                            {option.name}
                          </div>
                        );
                      })}
                    </div>
                  </Fragment>
                );
              })}
              <div className="condition-description-tips">
                {searchKeys.selectedCondition}:{" "}
                {conditionDescriptions[searchKeys.selectedCondition]}
              </div>
            </div>

            {data.data?.length ? (
              <>
                <div className="desktop-phone-list">
                  {data.data?.map((item, index) => (
                    <a
                      key={item.index}
                      href={urlcat(`/redirect/:gradeAndMerchant`, {
                        gradeAndMerchant: `tradein-${item.model.replace(
                          /\s*/g,
                          ""
                        )}-${item.condition}-${item.merchant.replace("-", "")}`,
                        redirectUrl: item.url,
                        id: item.sku,
                      })}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="phone-list-item"
                    >
                      <div className="img-container">
                        <img
                          width="100"
                          height="100"
                          src={item.merchantLogoUrl}
                        />
                      </div>
                      <div className="description">
                        <span>{item.model}</span>
                        <span className="attr">
                          {`${item.carrier} ${item.storage}`}
                        </span>
                      </div>

                      <div className="condition-container">
                        <div
                          className={`condition ${item.condition
                            .split(" ")
                            .join("-")}`}
                        >
                          {item.condition}
                        </div>
                      </div>

                      <div className="action">
                        <span className="price">${item.price / 100}</span>
                        <div className={`trade-type ${item.type}`}>
                          {item.type}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mobile-phone-list">
                  {data.data?.map((item, index) => (
                    <a
                      key={item.index}
                      href={urlcat(`/redirect/:gradeAndMerchant`, {
                        gradeAndMerchant: `tradein-${item.model.replace(
                          /\s*/g,
                          ""
                        )}-${item.condition}-${item.merchant.replace("-", "")}`,
                        redirectUrl: item.url,
                        id: item.sku,
                      })}
                      className="phone-list-item"
                      target="_blank"
                      rel="nofollow noreferrer"
                    >
                      <div className="top">
                        <img
                          width="50"
                          height="50"
                          src={item.merchantLogoUrl}
                        />
                        <div
                          className={`condition ${item.condition
                            .split(" ")
                            .join("-")}`}
                        >
                          {item.condition}
                        </div>
                      </div>
                      <div className="bottom">
                        <div className="description">
                          <span className="attr-name">{item.model}</span>
                          <span className="attr">
                            {`${item.carrier} ${item.storage}`}
                          </span>
                        </div>

                        <span className="price">
                          ${item.price / 100}
                          <div className={`condition ${item.type}`}>
                            {item.type}
                          </div>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="next-page-container">
                  <Pagination
                    onChange={(value) =>
                      setSearchKeys((prev) => ({ ...prev, pageNum: value }))
                    }
                    current={searchKeys.pageNum}
                    total={data?.count ?? 0}
                    pageSize={20}
                  />
                </div>
              </>
            ) : (
              <div style={{ fontSize: 14 }}>
                We couldn&apos;t find anything that matches what you were
                looking for. Try to change the filter setting.
              </div>
            )}
          </>
        ) : null}
      </main>
      <Footer
        appleList={appleList}
        sellAppleList={sellAppleList}
        buyNavbar={navbar}
        sellNavbar={sellNavbar}
      />
    </>
  );
}

export async function getStaticProps() {
  const navBarData = await getNavBar();
  const shortCutsData = await fetch(
    "https://api.276qa.com/search/trade-in/sell-your-phone?brand=Apple"
  ).then((response) => response.json());

  const productData = await fetch(
    "https://api.276qa.com/search/trade-in/host-list"
  ).then((response) => response.json());

  const conditionData = await fetch(
    "https://api.276qa.com/search/trade-in/category/all-category"
  ).then((response) => response.json());

  if (
    !shortCutsData.success ||
    !productData.success ||
    !conditionData.success
  ) {
    return {
      props: {
        navbar: [],
        appleList: [],
        productData: [],
        conditionData: [],
      },
    };
  }
  return {
    props: {
      ...navBarData,
      conditionData: conditionData.data,
      shortCutsData: shortCutsData.data?.Apple,
      products: productData.data.map((x) => ({ name: x, value: x })),
    },
  };
}
