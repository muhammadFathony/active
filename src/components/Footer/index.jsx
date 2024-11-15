import { Container, Row, Col } from "react-bootstrap"
const Component = () => {
    return (
        <>
            <footer className="footer light-background">
                <Container>
                    <Row className="g-4">
                        <Col md="6" lg="3" className="mb-3 mb-md-0">
                            <div className="widget">
                                <h3 className="widget-heading">About Us</h3>
                                <p className="mb-4">
                                    There live the blind texts. Separated they live in Bookmarksgrove
                                    right at the coast of the Semantics, a large language ocean.
                                </p>
                                <p className="mb-0">
                                    <a href="#" className="btn-learn-more">Learn more</a>
                                </p>
                            </div>
                        </Col>
                        <Col md="6" lg="3" className="ps-lg-5 mb-3 mb-md-0">
                            <div className="widget">
                                <h3 className="widget-heading">Navigation</h3>
                                <ul className="list-unstyled float-start me-5">
                                    <li><a href="#">Overview</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Find Buyers</a></li>
                                </ul>
                                <ul className="list-unstyled float-start">
                                    <li><a href="#">Overview</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Services</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="6" lg="3" className="ps-lg-5">
                            <div className="widget">
                                <h3 className="widget-heading">Recent Posts</h3>
                                <ul className="list-unstyled footer-blog-entry">
                                    <li>
                                        <span className="d-block date">May 3, 2020</span>
                                        <a href="#">There live the Blind Texts</a>
                                    </li>
                                    <li>
                                        <span className="d-block date">May 3, 2020</span>
                                        <a href="#">Separated they live in Bookmarksgrove right</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="6" lg="3" className="pl-lg-5">
                            <div className="widget">
                                <h3 className="widget-heading">Connect</h3>
                                <ul className="list-unstyled social-icons light mb-3">
                                    <li>
                                        <a href="#"><span className="bi bi-facebook"></span></a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="bi bi-twitter-x"></span></a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="bi bi-linkedin"></span></a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="bi bi-google"></span></a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="bi bi-google-play"></span></a>
                                    </li>
                                </ul>
                            </div>

                            <div className="widget">
                                <div className="footer-subscribe">
                                    <h3 className="widget-heading">Subscribe</h3>
                                    <form action="forms/newsletter.php" method="post" className="php-email-form">
                                        <div className="mb-2">
                                            <input type="text" className="form-control" name="email" placeholder="Enter your email"/>

                                                <button type="submit" className="btn btn-link">
                                                    <span className="bi bi-arrow-right"></span>
                                                </button>
                                        </div>
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">
                                            Your subscription request has been sent. Thank you!
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default Component