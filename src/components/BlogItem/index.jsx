import { Col } from "react-bootstrap"
import PropTypes from 'prop-types';
const Component = ({img, category, date, title, subtitle, imgUser, creator, position}) => {
    return (
        <>
            <Col md="6" lg="4">
                <div className="post-entry" data-aos="fade-up" data-aos-delay="100">
                    <a href="#" className="thumb d-block">
                        <img src={img} alt="Image" className="img-fluid rounded" />
                    </a>

                    <div className="post-content">
                        <div className="meta">
                            <a href="#" className="cat">{category}</a> •
                            <span className="date">{date}</span>
                        </div>
                        <h3><a href="#">{title}</a></h3>
                        <p>{subtitle}</p>

                        <div className="d-flex author align-items-center">
                            <div className="pic">
                                <img src={imgUser} alt="Image" className="img-fluid rounded-circle" />
                            </div>
                            <div className="author-name">
                                <strong className="d-block">{creator}</strong>
                                <span className="">{position}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}
Component.propTypes = {
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imgUser: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
}
export default Component;