let cache = null;

export const getNavBar = async () => {
  if (!cache) {
    console.log("navbardata");
    const navbarResponse = await fetch(
      "https://api-single-test.uptradeit.com/api/search/category/buy/navigation/bar"
    ).then((response) => response.json());

    const sellNavbarResponse = await fetch(
      "https://api-single-test.uptradeit.com/api/search/trade-in/category/navigation/bar"
    ).then((response) => response.json());

    const appleList = navbarResponse?.data?.find(
      (x) => x.key === "Apple"
    ).values;
    const sellAppleList = sellNavbarResponse?.data?.find(
      (x) => x.key === "Apple"
    ).values;

    cache = {
      navbar: navbarResponse.data,
      sellNavbar: sellNavbarResponse.data,
      appleList: appleList,
      sellAppleList,
    };
  }

  return cache;
};
