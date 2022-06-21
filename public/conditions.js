const optionsDOM = document.getElementsByClassName("condition-item");


for (const element of optionsDOM) {
  element.addEventListener("click", async (event) => {
    const stateStr = await AMP.getState();
    const state = JSON.parse(stateStr);
    const [name, value] = event.target.id.split("-");

    const isChecked = state.selectedValues.items.find((x) => x.value === value);

    const result = {
      items: isChecked
        ? state.selectedValues.items.filter((x) => x.value !== value)
        : [...state.selectedValues.items, { key: name, value }],
    };

    // const response = await fetch(
    //   `http://api.276qa.com/search/category/values?parentCategoryValueIds=${result.items
    //     .map((x) => x.value)
    //     .join(",")}`
    // );
    //
    // const json = await response.json();
    // console.log(json);

    AMP.setState({
      // CONDITIONS: [],
      selectedValues: result,
    });

    console.log(JSON.parse(await AMP.getState()));
  });
}
