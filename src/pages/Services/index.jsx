import { useEffect } from "react";
import { useBreadcrumb } from "../../context/BreadcrumbsContext";
import { Container, Row, Col } from "react-bootstrap";
import ServiceItem from "../../components/ServiceItem";
import ServiceList from "../../components/Services";
const Component = () => {
    const { setBreadcrumbs } = useBreadcrumb();
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
        setBreadcrumbs([
            {label: "Home", path: "/"},
            {label: "Services"}
        ]);
    }, [setBreadcrumbs])
    return (
        <>
            <section className="services-2 section">
                <Container>
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
                                    <Col sm="6" md="6" lg="6" className="col-6" key={index}>
                                        <ServiceItem key={index} title={value.title} subtitle={value.subtitle} section={1} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="services section light-background">
                <Container>
                    <ServiceList listServices={listServices} section={0} />
                </Container>
            </section>
        </>
    )
}
export default Component