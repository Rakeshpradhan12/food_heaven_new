export function filterData(searchText, allRestaurant) {
    return allRestaurant.filter((item) => 
        item?.info?.name?.toUpperCase()?.includes(searchText?.toUpperCase()));
  }