import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import SwiperSliderCustom from "../../components/SwiperSliderCustom";
import ServiceList from "../../components/Services";
import ServiceItem from "../../components/ServiceItem";
import CountList from "../../components/Counts";
import BlogList from "../../components/Blogs";
import TabList from "../../components/Tabs";

const Component = () => {
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
    const listCount = [
        {
            total: 3919,
            title: "Coffee"
        },
        {
            total: 2831,
            title: "Codes"
        },
        {
            total: 1914,
            title: "Project"
        }
    ]
    const currentBlog = [
        {
            category: "Development",
            date: " July 20, 2020",
            title: "There live the blind texts they live",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
            creator: "Winston Gold",
            position: "Lead Product Designer",
            img: "https://images.unsplash.com/photo-1692302998232-6ae11a9b64a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            imgUser: "https://media.istockphoto.com/id/1618291225/id/foto/kecantikan-terengah-engah-foto-stok.webp?s=2048x2048&w=is&k=20&c=ucJcOred4Qgikpyrsg9tjrHmrEYrVDASwh4Ob1r8VFo="
        },
        {
            category: "Development",
            date: " July 20, 2020",
            title: "There live the blind texts they live",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
            creator: "Winston Gold",
            position: "Lead Product Designer",
            img: "https://images.unsplash.com/photo-1692302998232-6ae11a9b64a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            imgUser: "https://media.istockphoto.com/id/1618291225/id/foto/kecantikan-terengah-engah-foto-stok.webp?s=2048x2048&w=is&k=20&c=ucJcOred4Qgikpyrsg9tjrHmrEYrVDASwh4Ob1r8VFo="
        },
        {
            category: "Development",
            date: " July 20, 2020",
            title: "There live the blind texts they live",
            subtitle: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
            creator: "Winston Gold",
            position: "Lead Product Designer",
            img: "https://images.unsplash.com/photo-1692302998232-6ae11a9b64a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            imgUser: "https://media.istockphoto.com/id/1618291225/id/foto/kecantikan-terengah-engah-foto-stok.webp?s=2048x2048&w=is&k=20&c=ucJcOred4Qgikpyrsg9tjrHmrEYrVDASwh4Ob1r8VFo="
        }
    ]
    const tabList = [
        {
            title: "Modern and clean design",
            subtitle: "Far far away, behind the word mountains, far from the countries .",
            imgSrc: "https://images.unsplash.com/photo-1692302998232-6ae11a9b64a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        },
        {
            title: "Sell Product",
            subtitle: "Far far away, behind the word mountains, far from the countries .",
            imgSrc: "https://images.unsplash.com/photo-1692302998232-6ae11a9b64a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        },
        {
            title: "Success Every Day",
            subtitle: "Far far away, behind the word mountains, far from the countries .",
            imgSrc: "https://images.unsplash.com/photo-1692302998232-6ae11a9b64a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        }
    ]
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
                <section className="about section p-2">
                    <Container>
                        <Row className="align-items-center justify-content-between">
                            <Col lg="7" className="mb-5 mb-lg-0 order-lg-2" data-aos="fade-up" data-aos-delay="400">
                                {/* <CarouselCustom listCarousel={listCarousel} /> */}
                                <SwiperSliderCustom slider={listCarousel} activeIndex={activeIndex} />
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
                        <ServiceList listServices={listServices} section={0} />
                    </Container>
                </section>
                <section className="stats section light-background">
                    <Container>
                        <Row className="gy-4 justify-content-center">
                            <Col lg="5">
                                <div className="images-overlap">
                                    <img src="https://images.unsplash.com/photo-1702055157616-4261788a01d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="image.jpg" className="img-fluid img-1" data-aos="fade-up" />
                                </div>
                            </Col>
                            <Col lg="4" className="ps-lg-5">
                                <span className="content-subtitle">Why Us</span>
                                <h2 className="content-title">Far far away Behind the Word Mountains</h2>
                                <p className="lead">
                                    Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia.
                                </p>
                                <p className="mb-5">
                                    There live the blind texts. Separated they live in Bookmarksgrove
                                    right at the coast of the Semantics, a large language ocean.
                                </p>
                                <CountList listCount={listCount} />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="blog-posts section">
                    <Container className="section-title" data-aos="fade-up">
                        <p>Recent Posts</p>
                        <h2>Blog Posts</h2>
                    </Container>
                    <Container>
                        <BlogList listBlog={currentBlog} />
                    </Container>
                </section>
                <section className="tabs section light-background">
                    <Container>
                        <Row className="gap-x-lg-4 justify-content-between">
                            <TabList tabList={tabList} onTabClick={setActiveIndex} />
                            <Col lg="8">
                                <SwiperSliderCustom slider={tabList} activeIndex={activeIndex} />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="services-2 section">
                    <Row className="justify-content-center" data-aos="fade-up">
                        <Col md="6" lg="4">
                            <span className="content-subtitle">Our Services</span>
                            <h2 className="content-title">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia
                            </h2>
                            <p className="lead">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <p className="mb-5">
                                Separated they live in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean.
                            </p>
                            <p>
                                <a href="#" className="btn btn-get-started">Get Started</a>
                            </p>
                        </Col>
                        <Col md="6" lg="6" className="ps-lg-5">
                            <Row>
                                {listServices?.map((value, index) => (
                                    <Col key={index} md="6" lg="6" sm="6">
                                        <ServiceItem key={index} subtitle={value.subtitle} title={value.title} section={1} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </section>
        </>
    )
}
export default Component