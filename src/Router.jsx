import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Prices from "./pages/Prices";


export const Router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/work",
                element:<Work/>
            },
            {
                path:"/prices",
                element:<Prices/>
            }
        ]
    }

])

