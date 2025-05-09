import { useState,useContext } from "react";
import logo from "../assets/image/food_heaven.png";
import { Link } from "react-router-dom";
import useNetwork from "../utils/useNetwork";
import UserContext from "../utils/userContext";
import store from "../utils/store";
import { useSelector } from "react-redux";

let title = (
  <>
    <img id="img" alt="log" src={logo} />
  </>
)

let color = {
  color: "black",
  fontSize: "20px"
};

const Header = () => {
  const online = useNetwork();
  const [login, setLogin] = useState(true);
  const {user} = useContext(UserContext);
  const cartItem= useSelector((store)=>store.cart.item);

  return (

    <div className='head'>
      {title}
      <div className="nav-items">
      
        <ul style={color}>
          
          <li key="home">
            <Link to="/" style={{ textDecoration: "none" }}>
              Home</Link>
          </li>
          <li key="contact">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              contact</Link>
          </li>
          <li key="about">
            <Link to="/about" style={{ textDecoration: "none" }}>
              About</Link>
          </li>
          

          <li key="instMart">
             <Link to="/instamart"  style={{ textDecoration: "none" }}>IMart
          </Link>
          </li>
          <li key="cart" style={{color : "red" , width : "110px"}}>
            
           <Link to="/store" >
           <span style= {{color:"black"}}> cart -  
            </span> {cartItem.length} Items
            </Link>
          </li>

        </ul>
      </div>
      <h3 style={{color: "orange", padding : '0px 25px 0px 25px'}}> {user.name}</h3>
      {
      (online) ? <h4 style={{width :'340px'}}>✅</h4> : <h4 >🚫</h4>   
      }


      {(login) ?
        <Link to="/login">
          <button onClick={() => setLogin(false)} style={{ margin: "10px", padding: "20px" }}>
            logIn</button>
        </Link>
        : <Link to="/">
          <button onClick={() => setLogin(true)} style={{ margin: "10px", padding: "20px" }}>
            logOut</button>
        </Link>
      }

    </div>
  )
}
export default Header;