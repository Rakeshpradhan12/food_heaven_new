import { useRouteError } from "react-router-dom";

const Error =function(){
    const routeError=useRouteError();
    return(
        <div>
        <h1> {routeError.data}</h1>
        <h2>{routeError.status+ " not found"}</h2>
        </div>
    )
}
export default Error;