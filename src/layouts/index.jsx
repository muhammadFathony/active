import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import AOS from 'aos';
import PureCounter from "@srexi/purecounterjs";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Component = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    new PureCounter();
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });

    const handleScroll = () => {
      // Toggle active class based on scroll position
      if (window.scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location, isScrolled]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <a
        href="#"
        onClick={scrollToTop}
        className={`scroll-top d-flex align-items-center justify-content-center ${
          isScrolled ? "active" : ""
        }`}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  )
}
export default Component