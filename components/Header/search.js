import SelectSearch from "react-select-search";
import { useCallback, useState } from "react";
import urlcat from "urlcat";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const [searchKey, setSearchKey] = useState("");
  const getOptions = useCallback(
    async (query) => {
      if (!searchKey) return [];

      try {
        const productData = await fetch(
          urlcat("https://api.276qa.com/search/product", { name: searchKey })
        ).then((response) => response.json());

        if (!productData.success) return products;

        return productData.data.map((x) => ({
          name: x.name,
          value: x.name,
          url: x.url,
        }));
      } catch {
        return [];
      }
    },
    [searchKey]
  );
  return (
    <SelectSearch
      options={[]}
      name="search"
      value={searchKey}
      onChange={(key) => setSearchKey(key)}
      placeholder="Search phone manufacturer and model"
      search
      getOptions={getOptions}
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
          />
        );
      }}
      renderOption={(optionsProps, optionData) => {
        return (
          <button
            {...optionsProps}
            onMouseDown={(event) => {
              optionsProps.onMouseDown(event);
              router.push(optionData.url)
            }}
          >
            {optionData.name}
          </button>
        );
      }}
    />
  );
}
