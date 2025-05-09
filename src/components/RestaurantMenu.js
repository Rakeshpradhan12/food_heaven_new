import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config"
import Simmer from "./SimmerUI";
import useMenu from "../utils/useMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    //how to read a dynamic URL params
    const { id } = useParams();

    const [restaurant, restaurantDetails, itemCards] = useMenu(id);
    
    const dispatch = useDispatch();
    const addToSlice=(restaurantDetails)=>{
        dispatch(addItem(restaurantDetails));
    };

    return (!restaurantDetails) ? <Simmer /> : (

        <div className="menu">
            <div style={{ marginRight: "60px " }}>
                <h1 style={{ color: " orange" }}>Restaurant id:{id}</h1>
                <h2 style={{ color: "green" }}>{restaurant?.cards[0]?.card?.card?.text}</h2>
                <img src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId} style={{ width: "300px" }} />
                <h3> {restaurantDetails?.areaName}</h3>
                <h3> {restaurantDetails?.city}</h3>
                <h3> {restaurantDetails?.cuisines}</h3>
                <h3> {restaurantDetails?.costForTwoMessage}</h3>
                <h3> {restaurantDetails?.avgRating + " stars"}</h3>
            </div>
            <div>
                <h1 style={{ color: "red" }}>Menu List</h1>
                <ul>
                    {itemCards.map((e) =>
                        <li key={e?.card?.info?.id}>{e?.card?.info?.name + "  :  " + e?.card?.info?.price/100 + " rupees"} 
                        <button style={{marginLeft : "20px", color : "white",backgroundColor : "green"}} onClick={()=>addToSlice(e?.card?.info)}> Add Item</button>
                        
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;