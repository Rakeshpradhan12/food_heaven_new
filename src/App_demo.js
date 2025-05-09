import { createBrowserRouter,RouterProvider,useRouteError,Outlet } from "react-router-dom";
import React, { useState, lazy, Component } from "react";
import Header from "./components/Demo_head.js";
import Body from "./components/Demo_body.js";
import Footer from "./components/Footer.js";
import Profile from "./components/Profile.js";
// import Error from "./components/Error.js";
import ReactDom from "react-dom/client";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Login from "./components/Form.js";
import {RestaurantMenu} from "./components/Demo_restaurantMenu.js";

const AppLayout=()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}

const Error = () => {
    const err = useRouteError();
    return(
        <>
          {
            console.log(err)
          }
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
           <h1>{err?.data}</h1>
           <h2>🚫🚫🚫🚫🚫🚫{err?.status}🚫🚫🚫🚫🚫🚫</h2>
           <h2>☠️☠️☠️☠️☠️{err?.statusText}☠️☠️☠️☠️☠️</h2>
           </div>
        </>
    );
}


const appRouter = createBrowserRouter(
    [
         {
            path: "/",
            element :<AppLayout />,
            errorElement :<Error />,
            children :[
                {
                    path:"/",
                    element :<Body/>
                },
                {
                    path : "profile",
                    element :<Profile />,
                    
                 },
                
                 {
                    path : "/about",
                    element : <About />,
                 },
                 {
                    path:"contact",
                    element : <Contact/>
                 },
                 {
                    element : <Login />,
                    path : "/login",
                 },
                 {
                    path :"/restaurantmenu/:id",
                    element : <RestaurantMenu />,
                 }
            ]
         }
         

    ]
)

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);