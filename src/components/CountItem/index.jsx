import { Col } from "react-bootstrap";
import PropTypes from 'prop-types';
const Component = ({total, title}) => {
    return (
        <>
            <Col className="counter" data-aos="fade-up" data-aos-delay="100">
                <span data-purecounter-separator="true" data-purecounter-start="0" data-purecounter-end={total} data-purecounter-duration="1" className="purecounter number"></span>
                <span className="d-block">{title}</span>
            </Col>
        </>
    )
}
Component.propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
};
export default Component