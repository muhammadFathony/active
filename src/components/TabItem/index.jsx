import PropTypes from "prop-types";
const Component = ({ title, subtitle, onClick }) => {
    return (
        <>
            <a
                href="#"
                className="service-item link horizontal d-flex active"
                data-aos="fade-left"
                data-aos-delay="0"
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}>
                <div className="service-icon color-1 mb-4">
                    <i className="bi bi-alarm"></i>
                </div>
                <div className="service-contents">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
            </a>
        </>
    )
}
Component.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default Component