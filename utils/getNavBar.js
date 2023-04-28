let cache = null;

export const getNavBar = async () => {
  if (!cache) {
    const navbarResponse = await fetch(
      "http://47.90.166.239:9000/search/category/buy/navigation/bar"
    ).then((response) => response.json());

    const sellNavbarResponse = await fetch(
      "http://47.90.166.239:9000/search/trade-in/category/navigation/bar"
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
