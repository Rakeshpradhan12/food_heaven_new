import { Link } from "react-router-dom";
import Logo from "../assets/image/food_heaven.png";
import { useState } from "react";
const Demo_head = ()=>{
    const [login,setLogin]=useState(false);
    return(
<>
   <div style={{border:"2px solid black",display:"flex",justifyContent:"space-between",alignItems:"center"}} >
      
      <Link to="/">
      <img src ={Logo}
       style={{width : " 60px",height:"60px",padding:"20px"}}
       key={"logo"} alt={"logo"}/>
      </Link>
       <ul className="u_l">
          <li>
            <Link to="/" style={{textDecoration:"none"}}> Home </Link>
          </li>
          
          <li>
            <Link to="/about" style={{textDecoration:"none"}}> About </Link>
          </li>
          <li>
            <Link to ="/profile" style={{textDecoration:"none"}}>Profile </Link>
          </li>
          <li>
            <Link to="/contact" style={{textDecoration:"none"}}>Contact</Link>
          </li>
          
        </ul>
        <div style={{padding:"50px"}}> {
      (login) ? 
       <Link to="/">
       <button onClick={()=>{setLogin(false)}}>logout</button>
       </Link>
       :
       <Link to="/login">
        <button onClick={()=>{setLogin(true)}}>login</button>
        </Link>
       }</div>
     
   </div>
</>
    );
}

export default Demo_head;