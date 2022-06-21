import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { useAsync } from "react-use";
import { useCallback, useState } from "react";
import urlcat from "urlcat";

export default function BuyPhone({
  conditions: initialConditions,
  carrierOptions,
}) {
  const [selectedValues, setSelectedValues] = useState([]);
  const [sortDrawerOpen, setSortDrawerOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const matches = useMediaQuery("(min-width: 1280px)");

  const onOptionSelect = useCallback((item) => {
    setSelectedValues((prev) => {
      return prev.some((x) => x.categoryValueId === item.categoryValueId)
        ? prev.filter((x) => x.categoryValueId !== item.categoryValueId)
        : [...prev, item];
    });
  }, []);

  const { value: conditions = [] } = useAsync(async () => {
    if (!selectedValues.length) return initialConditions;

    try {
      const ids = selectedValues.map((x) => x.categoryValueId);

      const response = await fetch(
        urlcat("http://api.276qa.com/search/category/values", {
          parentCategoryValueIds: ids.join(","),
        })
      );
      const result = await response.json();

      if (!result.success) return initialConditions;

      return result.data;
    } catch {
      return initialConditions;
    }
  }, [selectedValues, initialConditions]);

  return (
    <div>
      <main className="buy-phone-page">
        <div className="buy-phone-conditions">
          <div className="conditions-content">
            {conditions.map((data) => (
              <Accordion
                className="condition-section"
                key={data.id}
                elevation={0}
              >
                <AccordionSummary
                  style={{ minHeight: 48, padding: 0 }}
                  classes={{
                    root: "accordion-header-item",
                    content: "accordion-content",
                  }}
                  expandIcon={
                    <img
                      style={{ width: 24, height: 24 }}
                      src="/svg/arrow-down.svg"
                      alt="arrow-down"
                    />
                  }
                >
                  <h3 className="condition-header">
                    <span>
                      {data.name}
                      {data.name === "CONDITION" ? (
                        <a href="/cosmetic-conditions" target="_blank">
                          <img
                            className="condition-alert"
                            src="/svg/alert-circle.svg"
                            width="12"
                            height="12"
                          />
                        </a>
                      ) : null}
                    </span>
                  </h3>
                </AccordionSummary>
                <AccordionDetails classes={{ root: "condition-content" }}>
                  {data.values.map((item) => {
                    return (
                      <div
                        key={item.categoryValueId}
                        onClick={() => onOptionSelect(item)}
                        className={`condition-item ${
                          selectedValues.some(
                            (x) => x.categoryValueId === item.categoryValueId
                          )
                            ? "selected-condition-item"
                            : undefined
                        }`}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>

        <div className="buy-phone-content">
          <div className="buy-phone-page-title">
            <h1>Browse Refurbished Phones and Devices for Sale</h1>
            <h2>
              Among hundreds of used phone and device sellers, we have selected
              a handful of certified resellers and marketplaces that provide
              quality certified used or refurbished phones and devices.
            </h2>
          </div>

          <div className="buy-phone-search-form">
            <Autocomplete
              freeSolo
              options={[]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Search phone manufacturer and model"
                />
              )}
            />
            <button className="btn btn-primary">Search</button>
            <svg
              className="form-search-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
          <div className="carrier-options">
            {carrierOptions.map((item) => (
              <div
                key={item.categoryValueId}
                className={`carrier-option ${
                  selectedValues.some(
                    (x) => x.categoryValueId === item.categoryValueId
                  )
                    ? "selected-carrier-option"
                    : undefined
                }`}
                onClick={() => onOptionSelect(item)}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="option-controllers">
            <div className="filter-controller">
              <label className="dropdown">
                <span onClick={() => setFilterDrawerOpen(true)}>
                  <img src="/svg/filter.svg" width="20" height="12" />
                  <span>Filters</span>
                </span>
              </label>
              {!matches ? (
                <Drawer
                  open={filterDrawerOpen}
                  onClose={() => setFilterDrawerOpen(false)}
                >
                  <div className="filter-drawer buy-phone-conditions">
                    <div className="conditions-content">
                      {conditions.map((data) => (
                        <Accordion
                          className="condition-section"
                          key={data.id}
                          elevation={0}
                        >
                          <AccordionSummary
                            style={{ minHeight: 48, padding: 0 }}
                            classes={{
                              root: "accordion-header-item",
                              content: "accordion-content",
                            }}
                            expandIcon={
                              <img
                                style={{ width: 24, height: 24 }}
                                src="/svg/arrow-down.svg"
                                alt="arrow-down"
                              />
                            }
                          >
                            <h3 className="condition-header">
                              <span>
                                {data.name}
                                {data.name === "CONDITION" ? (
                                  <a
                                    href="/cosmetic-conditions"
                                    target="_blank"
                                  >
                                    <img
                                      className="condition-alert"
                                      src="/svg/alert-circle.svg"
                                      width="12"
                                      height="12"
                                    />
                                  </a>
                                ) : null}
                              </span>
                            </h3>
                          </AccordionSummary>
                          <AccordionDetails
                            classes={{ root: "condition-content" }}
                          >
                            {data.values.map((item) => {
                              return (
                                <div
                                  key={item.categoryValueId}
                                  onClick={() => onOptionSelect(item)}
                                  className={`condition-item ${
                                    selectedValues.some(
                                      (x) =>
                                        x.categoryValueId ===
                                        item.categoryValueId
                                    )
                                      ? "selected-condition-item"
                                      : undefined
                                  }`}
                                >
                                  {item.name}
                                </div>
                              );
                            })}
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </div>
                  </div>
                </Drawer>
              ) : null}
            </div>
            <div className="sort-controller">
              <label className="dropdown">
                <span
                  className="dropdown-toggle"
                  onClick={() => setSortDrawerOpen(true)}
                >
                  <img src="/svg/sort.svg" width="20" height="15" />
                  <span className="desktop-sort">Sort By: Lowest Price</span>
                  <span className="mobile-sort">Sort</span>
                </span>
                <input type="checkbox" className="dropdown-input" id="sort" />
                <ul className="dropdown-menu">
                  <li className="dropdown-item" option="lowest" selected>
                    <span>Lowest Price</span>
                    <img width="20" height="20" src="/svg/check.svg" />
                  </li>
                  <li className="dropdown-item" option="highest">
                    <span>Highest Price</span>
                    <img width="20" height="20" src="/svg/check.svg" />
                  </li>
                  <li className="dropdown-item" option="best">
                    <span>Best Condition</span>
                    <img width="20" height="20" src="/svg/check.svg" />
                  </li>
                </ul>
              </label>
              {!matches ? (
                <Drawer
                  anchor="right"
                  open={sortDrawerOpen}
                  onClose={() => setSortDrawerOpen(false)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "8px 0",
                    }}
                  >
                    <div className="drawer-sort-item" option="lowest">
                      <span>Lowest Price</span>
                    </div>
                    <div className="drawer-sort-item" option="highest">
                      <span>Highest Price</span>
                    </div>
                    <div className="drawer-sort-item" option="best">
                      <span>Best Condition</span>
                    </div>
                  </div>
                </Drawer>
              ) : null}
            </div>
          </div>

          <div className="options-container">
            <div className="filter-options">
              {selectedValues.map((x) => (
                <div className="filter-option" key={x.categoryValueId}>
                  {x.name}
                  <svg width="24px" height="24px" viewBox="0 0 24 24">
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/*<amp-list*/}
          {/*  layout="responsive"*/}
          {/*  src="amp-state:list"*/}
          {/*  width="1000"*/}
          {/*  height="1000"*/}
          {/*  className="phone-list desktop-phone-list"*/}
          {/*>*/}
          {/*  <template type="amp-mustache">*/}
          {/*    <a className="phone-list-item" href="#">*/}
          {/*      <div className="img-container">*/}
          {/*        <amp-img width="100" height="100" src="{{ logo }}" />*/}
          {/*      </div>*/}
          {/*      <div className="description">*/}
          {/*        <span>{`{{ model }}`}</span>*/}
          {/*        <span className="attr">{`{{ attr }}`}</span>*/}
          {/*      </div>*/}

          {/*      <div className="condition {{ condition }}">*/}
          {/*        {`{{ condition }}`}*/}
          {/*      </div>*/}

          {/*      <div className="action">*/}
          {/*        <span className="price">${`{{ price }}`}</span>*/}
          {/*        <div className="view-detail">View Detail</div>*/}
          {/*      </div>*/}
          {/*    </a>*/}
          {/*  </template>*/}
          {/*</amp-list>*/}

          {/*<amp-list*/}
          {/*  layout="responsive"*/}
          {/*  src="amp-state:list"*/}
          {/*  width="1000"*/}
          {/*  height="1000"*/}
          {/*  className="phone-list mobile-phone-list"*/}
          {/*>*/}
          {/*  <template type="amp-mustache">*/}
          {/*    <a href="#" className="mobile-phone-list-item">*/}
          {/*      <div className="top">*/}
          {/*        <amp-img width="50" height="50" src="{{ logo }}" />*/}
          {/*        <div className="condition {{ condition }}">*/}
          {/*          {`{{ condition }}`}*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="bottom">*/}
          {/*        <div className="description">*/}
          {/*          <span>{`{{ model }}`}</span>*/}
          {/*          <span className="attr">{`{{ attr }}`}</span>*/}
          {/*        </div>*/}

          {/*        <span className="price">${`{{ price }}`}</span>*/}
          {/*      </div>*/}
          {/*    </a>*/}
          {/*  </template>*/}
          {/*</amp-list>*/}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://api.276qa.com/search/category/values");

  if (!response.ok) return { props: {} };

  const data = await response.json();

  if (!data.success) return { props: {} };

  const carrierOptions = data.data.find((x) => x.name === "CARRIER");

  return {
    props: {
      conditions: data.data,
      carrierOptions: carrierOptions ? carrierOptions.values : [],
      // data: [
      //   {
      //     model: "iphone8",
      //     logo: "/brand/backMarket.png",
      //     attr: "AT&T 64GB Red",
      //     condition: "Fair",
      //     price: 279,
      //   },
      // ],
    },
  };
}
