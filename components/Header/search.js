import SelectSearch from "react-select-search";

export default function Search() {

    return <SelectSearch
        options={[]}
        name="search"
        // value={searchKey}
        // onChange={(key) => setSearchKey(key)}
        placeholder="Search phone manufacturer and model"
        search
        // getOptions={getOptions}
        debounce={1000}
        // renderValue={(props, snapshot, className) => {
        //     return (
        //         <input
        //             {...props}
        //             value={searchKey}
        //             onChange={(event) => {
        //                 setSearchKey(event.target.value);
        //                 props.onChange(event);
        //             }}
        //             onKeyDown={(event) => {
        //                 props.onKeyDown(event);
        //                 if (event.key === "Enter") {
        //                     onSearchClick();
        //                 }
        //             }}
        //             className={className}
        //         />
        //     );
        // }}
    />
}