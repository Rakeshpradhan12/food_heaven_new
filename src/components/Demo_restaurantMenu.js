
import { useParams } from "react-router";
import { useEffect,useState } from "react";
import { MENU_CDN_URL,IMG_CDN_URL } from "./config";


const RestaurantMenu = ()=>{
    async function getMenu(id){
        const data = await fetch(MENU_CDN_URL +id);
        const json = await data.json();
        console.log(json); 
        setRestaurantDetails(json.data.cards[2]?.card?.card?.info);
        setItemCards(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
        const {id} =useParams();
        const [itemCards,setItemCards]=useState([]);
        const [restaurantDetails,setRestaurantDetails]=useState(null);
        useEffect(()=>{
            getMenu(id);
           },[])
    return(
        <>
           
            <h1>Restaurant Menu</h1>
            {
                <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",paddingLeft:"100px",gap:"50px"}}>
                <div >
                <h2 style={{color:"green"}}>{restaurantDetails?.name}</h2>
                <img src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId} style={{width:"300px"}}/>
                <h3> {restaurantDetails?.areaName}</h3>
                <h3> {restaurantDetails?.city}</h3>
                <h3> {restaurantDetails?.cuisines}</h3>
                <h3> {restaurantDetails?.costForTwoMessage}</h3>
                <h3> {restaurantDetails?.avgRating + " stars"}</h3>
                </div>
                <div>
                <h1 style={{color:"red",paddingLeft:"100px"}}>Menu List</h1>           
                <div style={{display:"flex",flexDirection:"column",gap:"20px",paddingLeft:"100px"}}>
                    {
                itemCards.map((e)=>
                    <div key={e?.card?.info?.id} style={{display:"flex",flexDirection:"row",alignItems:"center",width:"400px",justifyContent:"space-between"}}>
                        <img src={IMG_CDN_URL+ e?.card?.info?.imageId} style={{height:"200px",width:"200px"}}/>
                        <div style={{marginLeft:"20px"}}>
                        <h2 style={{color:"orange"}}>{e?.card?.info?.name}</h2>
                        <h3> <span style={{color:"blue"}}> Rs : </span>{e?.card?.info?.price/100} rupees</h3>
                        
                        </div>
                   </div>)
              }</div> 
              </div>
                </div>
            }
            
           
        </>
    );
}
export {RestaurantMenu};