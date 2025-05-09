import React,{Component, lazy , Suspense,useState} from 'react';
// import {createElement as ce} from 'react';
import ReactDOM from "react-dom/client";
// import React from "react";
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
import store from './utils/store.js';
import { Provider } from 'react-redux';
// import Instamart from './components/InstaMart.js';
import ItemStore from './components/ItemStore.js';
// lazy loading suspend the loading
// import Demo from "./components/Demo.js";


 const Instamart = lazy(()=>import('./components/InstaMart.js'));




const AppLayout = () => {
    const [user,setUser]= useState(
        {
        name : "Rakesh Ranjan Pradhan",
        email: "rakesh@gmail.com"
         },
        );

    return (
        <Provider store={store}>
        <UserContext.Provider value={{user:user,setUser:setUser}}>
            <Header />
            <Outlet />
            <Footer />
          </UserContext.Provider>  
        </Provider>
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
                },
                {
                    path : "/store",
                    element : <ItemStore/>

                }

            ]
        }
    ]
);


// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);


// let heading = React.createElement("h1",
//     {id : "container"},
//     React.createElement('h2',{},"heading1"),
//     React.createElement('h2',{},"heading2")
//        );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Demo/>);

// {
//   "name": "react",
//   "version": "1.0.0",
//   "description": "this a react app",
//   "scripts": {
//     "start": "parcel index.html",
//     "build": "parcel build index.html",
//     "test": "jest"
//   },
//   "author": "Rakesh",
//   "license": "ISC",
//   "devDependencies": {
//     "@babel/core": "^7.24.5",
//     "babel-plugin-transform-remove-console": "^6.9.4",
//     "parcel": "^2.12.0",
//     "process": "^0.11.10"
//   },
//   "dependencies": {
//     "@reduxjs/toolkit": "^2.3.0",
//     "formik": "^2.4.6",
//     "react": "^18.3.1",
//     "react-dom": "^18.3.1",
//     "react-redux": "^9.1.2",
//     "react-router-dom": "^6.24.0"
//   },
//   "browserList": [
//     "last 6 chrome version"
//   ]
// }


