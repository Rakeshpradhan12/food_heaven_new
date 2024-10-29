import { useContext } from "react";
import UserContext from "../utils/userContext";

let Footer=()=>{
    const {user}=useContext(UserContext);
    return (
        <h4>♨️♨️♨️♨️This app is Developed By {user.name}-{user.email}♨️♨️♨️♨️</h4>
    )
}
export default Footer;