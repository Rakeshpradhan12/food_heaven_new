import { useEffect, useState } from "react";
import { MENU_CDN_URL } from "../components/config";

const useMenu = (id) => {

    const [restaurant, setRestaurant] = useState(null);
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [itemCards, setItemCards] = useState(null);

    useEffect(() => {
        getMenu();
    }, []);

    async function getMenu() {
       try{
            const data = await fetch( MENU_CDN_URL + id);
            const json = await data.json();
            setRestaurant(json?.data);
            setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);
            setItemCards(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            console.log(id);
       }
    
       catch(e){
        return <h1>failed to fetch menu</h1> ;
       }
    

    }

    return [restaurant, restaurantDetails, itemCards];


}
export default useMenu;

