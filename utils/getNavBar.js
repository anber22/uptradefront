let cache = null;

export const getNavBar = async () => {
  console.log(cache)
  if (!cache) {
    const navbarResponse = await fetch(
      "https://api.276qa.com/search/category/buy/navigation/bar"
    ).then((response) => response.json());

    const appleList = navbarResponse.data.find((x) => x.key === "Apple").values;
    cache = {
      navbar: navbarResponse.data,
      appleList: appleList,
    };
  }

  return cache;
};
