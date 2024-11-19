import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
import 'aos/dist/aos.css'; // Import AOS styles
import 'swiper/css';
import 'swiper/css/pagination';
import { BreadcrumbsProvider } from "./context/BreadcrumbsContext";
const App = () => {
  return (
    <>
      <BreadcrumbsProvider>
        <RouterProvider
          router={router}
        />
      </BreadcrumbsProvider>
    </>
  )
}

export default App
