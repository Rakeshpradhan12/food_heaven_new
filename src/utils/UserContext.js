import { createContext } from "react";

const UserContext=createContext({

     user : {
         name : "Dommy Name ",
         email: "dommy@gmail.com"
       },
     address : {
       city : "Bhubaneswar",
       state : "Odisha"
  
   }}
    );
export const SecondaryContext=createContext({
        age : "25",
        profession : "Software Engineer"
    });

 UserContext.displayName="PrimaryContext";
 SecondaryContext.displayName="SecondaryContext";


// export {SecondaryContext};
 export default UserContext;