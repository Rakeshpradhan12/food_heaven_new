import { useEffect, useState } from "react";
import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";
import Simmer from "./SimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const Body = () => {
  //in js we use const text="kfc"; similarly in react below for variables that changes we use
  const [searchText, setSearchText] = useState();
  const [filteredRestaurant, allRestaurant, setFilteredRestaurant] = useRestaurant();
  const {user,setUser}=useContext(UserContext);
  //avoid rendering
  //early return
  if (!allRestaurant) return null;
  return allRestaurant?.length === 0 ?
    <Simmer />
    : (
      <>
        <div className="search-container">
          <input
            type="text"
            placeholder="search"
            className="search-input"
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
          />

          <button className="search-btn"
            onClick={() => {
              const data = filterData(searchText, allRestaurant);
              setFilteredRestaurant(data);
            }
            }>
            Search</button>

            <input type="text" value={user.name} onChange={(e)=>{
              setUser({
                ...user,
                name:e.target.value,
                });
            }} style={{marginLeft:"20px"}}/> name
            <input type="text" value={user.email} onChange={(e)=>{
              setUser({
                ...user,
                email:e.target.value,
              })
            }}/>email
            
        </div>

        {/* {conditional rendering} */}
        <div className="restaurantList" >
          {filteredRestaurant.length === 0 ?
            <h1 style={{ color: "red" }}>no results found match the restaurant</h1>
            : filteredRestaurant.map((data) => {
              return (
                <Link to={"/restaurant/" + data.info.id} key={data.info.id} style={{ textDecoration: "none" }}>
                  <RestaurantCard {...data.info} />
                </Link>
              )
            })
          }

        </div>
      </>
    )
}

export default Body;