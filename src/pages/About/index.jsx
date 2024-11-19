import { useEffect } from "react";
import { useBreadcrumb } from "../../context/BreadcrumbsContext";
import { Container, Row, Col } from "react-bootstrap";
import CountList from "../../components/Counts";
import Testimonials from "../../components/Testimonials";
const Component = () => {
    const { setBreadcrumbs } = useBreadcrumb();
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
    const testimonials = [
        {
            imgSrc: "https://media.istockphoto.com/id/1618291225/id/foto/kecantikan-terengah-engah-foto-stok.webp?s=2048x2048&w=is&k=20&c=ucJcOred4Qgikpyrsg9tjrHmrEYrVDASwh4Ob1r8VFo=",
            name: "Adam Aderson",
            opinion: "“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a largelanguage ocean.”"
        },
        {
            imgSrc: "https://media.istockphoto.com/id/1618291225/id/foto/kecantikan-terengah-engah-foto-stok.webp?s=2048x2048&w=is&k=20&c=ucJcOred4Qgikpyrsg9tjrHmrEYrVDASwh4Ob1r8VFo=",
            name: "Lukas Devlin",
            opinion: "“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a largelanguage ocean.”"
        },
        {
            imgSrc: "https://media.istockphoto.com/id/1618291225/id/foto/kecantikan-terengah-engah-foto-stok.webp?s=2048x2048&w=is&k=20&c=ucJcOred4Qgikpyrsg9tjrHmrEYrVDASwh4Ob1r8VFo=",
            name: "Kayla Bryant",
            opinion: "“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a largelanguage ocean.”"
        }
    ]
    useEffect(() => {
        setBreadcrumbs([
            {label: "Home", path: "/"},
            {label: "About"}
        ]);
    }, [setBreadcrumbs])
    return (
        <>
            <section className="about-2 section">
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
            <section className="testimonials section">
                <Container className="section-title" data-aos="fade-up">
                    <p>Happy Customers</p>
                    <h2>Testimonials</h2>
                </Container>
                <Container data-aos="fade-up">
                    <Row className="justify-content-center">
                        <Col lg="7">
                            <Testimonials slider={testimonials} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Component