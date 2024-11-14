import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
const Component = ({title, subtitle}) => {
    return (
        <>
            <Col lg="3">
                <div className="services-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="services-icon">
                        <i className="bi bi-command"></i>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                    </div>
                </div>
            </Col>
        </>
    )
}
Component.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};
export default Component