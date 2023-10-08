import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ServiceCard from "./serviceCard/ServiceCard";
import Contact from "./pages/Contact";
import Login from "./pages/Login";


const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch("/public/service.json")
            },
            
            {
                path : "/contact",
                element : <Contact></Contact>
            },
            {
                path : "/services/:id",
                element : <ServiceCard></ServiceCard>,
                loader : () => fetch("/public/service.json")
            },
            {
                path : "/login",
                element : <Login></Login>
            }
        ]
    }
])

export default router;