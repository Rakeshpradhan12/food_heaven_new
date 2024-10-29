
async function getMenu(){
   
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    setRestaurant(json?.data);
    setRestaurantDetails(json.data.cards[2]?.card?.card?.info);
    setItemCards(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
   
}