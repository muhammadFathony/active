import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

import {useEffect} from "react"
import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./components/Navbar"
import SwiperSliderCustom from "./components/SwiperSliderCustom";
import ServiceList from "./components/ServiceList";
const App = () => {
  const listCarousel = [
    {
      imgSrc: "https://images.unsplash.com/photo-1692302998232-6ae11a9b64a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      title: "slide 1",
      subtitle: "subtitle 1"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1702055157616-4261788a01d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      title: "slide 2",
      subtitle: "subtitle 2"
    }
  ]
  const listServices = [
    {
      title: "Technology",
      subtitle: "Separated they live in Bookmarksgrove right at the coast"
    },
    {
      title: "Web Design",
      subtitle: "Separated they live in Bookmarksgrove right at the coast"
    },
    {
      title: "Branding",
      subtitle: "Separated they live in Bookmarksgrove right at the coast"
    }
  ]
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <section className="about section p-0">
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col lg="7" className="mb-5 mb-lg-0 order-lg-2"  data-aos="fade-up" data-aos-delay="400">
                {/* <CarouselCustom listCarousel={listCarousel} /> */}
                <SwiperSliderCustom slider={listCarousel} />
              </Col>
              <Col lg="4" className="order-lg-1">
                <span className="section-subtitle" data-aos="fade-up">Welcome</span>
                <h1 className="mb-4" data-aos="fade-up">
                  Excepteur sint occaecat cupidatat non proident
                </h1>
                <p data-aos="fade-up">
                  Far far away, behind the word mountains, far from the countries
                  Vokalia and Consonantia, there live the blind texts. Separated they
                  live in Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean.
                </p>
                <p className="mt-5" data-aos="fade-up">
                  <a href="#" className="btn btn-get-started">Get Started</a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="about-2 section light-background">
          <Container>
            <div className="content">
              <Row className="justify-content-center">
                <Col sm="12" md="5" lg="4" xl="4" className="order-lg-2 offset-xl-1 mb-4">
                  <div className="img-wrap text-center text-md-left" data-aos="fade-up" data-aos-delay="100">
                    <div className="img">
                      <img src="https://images.unsplash.com/photo-1692302998232-6ae11a9b64a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="circle image" className="img-fluid" />
                    </div>
                  </div>
                </Col>
                <Col sm="12" md="5" lg="5" xl="4" className="offset-md-0 offset-lg-1">
                  <div className="px-3">
                    <span className="content-subtitle">Our Mission</span>
                    <h2 className="content-title text-start">
                      The Big Oxmox advised her not to do so, because there were
                      thousands.
                    </h2>
                    <p className="lead">
                      A small river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic country.
                    </p>
                    <p className="mb-5">
                      The Big Oxmox advised her not to do so, because there were
                      thousands of bad Commas, wild Question Marks and devious Semikoli.
                    </p>
                    <p>
                      <a href="#" className="btn-get-started">Get Started</a>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className="services section light-background">
          <Container>
            <ServiceList listServices={listServices} />
          </Container>
        </section>
        <section className="stats section light-background">
          <Container>
            <Row className="gy-4 justify-content-center">

            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default App
