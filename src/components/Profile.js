import { useState } from "react";
import Img from "../assets/image/my_photo.jpeg";
import { useContext } from "react";
import { SecondaryContext } from "../utils/userContext";
const Profile = ()=>{
    const {age,profession} = useContext(SecondaryContext);
    const [info,setInfo]=useState(
        {
            name: "Rakesh Ranjan Pradhan",
            age: age,
            profession: profession
        }
    )
    return(
        <>
        <h3 style={{color: " red", fontWeight:"bold"}}>Modify Your Data Here :-</h3>
        <div style={{margin: "30px", display : "flex", justifyContent : "space-between"}}>
       <label> name : <input type="text" value={info.name} onChange={
            (e)=>{
                setInfo({
                    ...info,
                    name : e.target.value}
                )}
            }/></label>
        <label> profession : <input type="text" value={info.profession} onChange={
            (e)=>{
                setInfo({
                    ...info,
                    profession : e.target.value}
                )}
            } /></label>
            <label>age : <input type="number" value={info.age} onChange={
            (e)=>{
                setInfo({
                    ...info,
                    age : e.target.value}
                )}
            }/> </label>
             
            </div>
        <div>
           
            <img src={Img} alt="my Photo"/>
            <h2>Name : {info.name}</h2>
            <h4>Age : {info.age}</h4>
            <h4>Profession : {info.profession}</h4>
            <h3>Mobile Number : 7751953031</h3>
        </div>
        </>
    )
}

export default Profile ;