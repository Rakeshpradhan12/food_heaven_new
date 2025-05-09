
import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

// import useRestaurant from "../utils/useRestaurant";
import SimmerUI from "./SimmerUI";
const filterData = (textContent,allRestaurant)=>{
    const filter =allRestaurant.filter((r)=>r.info.name.toLowerCase().includes(textContent.toLowerCase()));
    return filter;
}


const D_body=()=>{
    const [allRestaurant,setAllRestaurant]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState(allRestaurant);
  
   let[textContent,setTextContent] =useState("");
//    let [restaurantList,setRestaurantList]=useState(allRestaurant);

    useEffect(
        ()=>{
            getData();
        },[]);

async function getData (){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355&lng=77.3910&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data?.json();
    console.log(json);
    setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
console.log("rerendered");
if(!allRestaurant) return null;
  return  allRestaurant?.length ==0 ?
 <SimmerUI /> :
      (
        <>
        {console.log("rerendered2")}
         <h1>This is a input box</h1>   
         <input
            type="text"
            placeholder = {textContent}
            value = {textContent}
            id={"inp"}
            onChange={(e)=>(setTextContent(e.target.value))}/>
            <button onClick={()=>{
             
                const data=filterData(textContent,allRestaurant);
                setFilteredRestaurant(data);
            }}>search</button>
            <h1>Restaurant List</h1>
            <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
              
                {  
                    (filteredRestaurant.length==0)?
                    <h1 id={"error"} style={{color:"red"}}>no restaurants found😭😭😭😭😭😭😭🤖🤖🤖🤖🤖🤖🚫🚫🚫🚫🚫🤐🤐🤐🤐</h1>:                 
                    filteredRestaurant.map((l)=><Link to={`/restaurantmenu/${l.info.id}`} key={l.info.id}><RestaurantCard 
                      {...l.info}
                      />
                      </Link>)

                }                
       
            </div>
           
         </>
    );
}

export  default D_body;