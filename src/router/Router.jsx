import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ServiceCard from "../serviceCard/ServiceCard";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Events from "../events/Events";
import Features from "../pages/Features";
import About from "../pages/About";


const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch("/service.json")
            },
            
            {
                path : "/contact",
                element : <Contact></Contact>
            },
            {
                path : "/events",
                element : <PrivateRoute><Events></Events></PrivateRoute>,
                loader : ()=> fetch("/events.json")
            },
            {
                path : "/features",
                element :<PrivateRoute><Features></Features></PrivateRoute>
            },
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/services/:id",
                element : <PrivateRoute><ServiceCard></ServiceCard></PrivateRoute>,
                loader : () => fetch("/service.json")
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            }
        ]
    }
])

export default router;