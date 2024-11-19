import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom";
const Component = () => {
    return (
        <>
            <header className="header d-flex align-items-center sticky-top p-0">
                <Container fluid className="container-xl position-relative d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1 className="sitename">Active.</h1>
                    </a>
                    <Navbar sticky="top" expand="lg" className="w-100 justify-content-end">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navmenu ms-auto">
                                <Nav.Item>
                                    <NavLink to="/">Home</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/services">Services</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/about">About</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
        </>
    )
}
export default Component;