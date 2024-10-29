import React,{Component, lazy , Suspense,useState} from 'react';
import ReactDOM from "react-dom/client";
//default import and named import respectively
import Header from "./components/Header";
// also can write import title,{Header} from "Components/title.js or jsx";
//also import * as xy from "components/export";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from './components/About.js';
import Error from "./components/Error.js";
import Contact from './components/Contact.js';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Form';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './components/Profile';
import Simmer from "./components/SimmerUI.js"
import UserContext from './utils/userContext.js';
// import Instamart from './components/InstaMart.js';
// lazy loading suspend the loading
 const Instamart = lazy(()=>import('./components/InstaMart.js'));




const AppLayout = () => {
    const [user,setUser]= useState(
        {
        name : "Rakesh Ranjan Pradhan",
        email: "rakesh@gmail.com"
         },
        );

    return (
        <>
        <UserContext.Provider value={{user:user,setUser:setUser}}>
            <Header />
            <Outlet />
            <Footer />
          </UserContext.Provider>  
        </>
    )
}


const appRouter = createBrowserRouter(
    
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Body 
                    // user= {{
                    //     name : "Rakesh Ranjan Pradhan",
                    //     email: "pradhanrakesh144@gmail.com"
                    // }}
                    />
                   
                },
                {
                    // path: "about",
                    // element: <About />,
                    // children :[
                    //     {
                    //         path : "profile",
                    //         element: <Profile />
                    //     }
                    // ]
                    path :"about",
                    element : <About />,
                    errorElement: <Error />,
                    children : [
                        {
                        path : "profile",
                        element : <Profile />
                        },
                        {
                        path : "connectUs",
                        element : <Contact />
                        }
                    ]
                   
                    
                },
                {
                    path: "/contact", //  /-means from the root
                    element: <Contact />,
                  
                },
                {
                    path: "/restaurant/:id",
                    element: <RestaurantMenu />,
                    errorElement: <Error />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path : "/instamart",
                    // element : <Instamart />
                    element:<Suspense fallback={<Simmer/>}> <Instamart/>
                    </Suspense>
                }

            ]
        }
    ]
);


// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)