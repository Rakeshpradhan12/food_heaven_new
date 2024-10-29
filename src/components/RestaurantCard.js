
import { IMG_CDN_URL } from "./config";
import { useContext } from "react";
import UserContext from "../utils/userContext";
const RestaurantCard=({name,cloudinaryImageId,areaName,locality,avgRating})=>{
    const {user} = useContext(UserContext);
    return(
        <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId}/>
        <h2 style={{color : "green"}}>{name}</h2>
        <h3  style={{color : "orange"}}>{areaName}</h3>
        <h3  style={{color : "red"}}>{locality}</h3>
        <h4  style={{color : "black"}}>{avgRating} stars</h4>
        <h4  style={{color : "indigo"}}>{user.name}-{user.email}</h4>
        </div>
    )
}

export default RestaurantCard;