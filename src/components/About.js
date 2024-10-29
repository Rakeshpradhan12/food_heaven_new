import { Outlet } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const About=()=>{
   const props=useContext(UserContext);
   return(
    <>
    <h1>We are developing react projects for your help</h1>
    <h2>Hi , I am {props.user.name }-{props.user.email}, nice to meet  !!!!</h2>
    <Outlet/>
    </>
   )
}
export default About;