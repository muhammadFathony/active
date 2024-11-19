import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/services",
                element: <Services />
            }
        ]
    }
])