import { Col } from "react-bootstrap"
import PropTypes from "prop-types"
const Component = ({ title, subtitle, section }) => {
    return (
        <>
            {section === 0 ? (
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
            ) : (
                <div className="services-item" data-aos="fade-up" data-aos-delay="200">
                    <div className="services-icon">
                        <i className="bi bi-command"></i>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                    </div>
                </div>
        )}

        </>
    )
}
Component.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    section: PropTypes.number.isRequired
};
export default Component