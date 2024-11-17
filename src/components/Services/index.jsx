import { Row } from "react-bootstrap"
import PropTypes from 'prop-types';
import ServiceItem from "../ServiceItem"
const Component = ({listServices, section}) => {
    return(
        <>
        <Row className="gy-4 justify-content-center">
            {listServices?.map((value, index) => (
                <ServiceItem key={index} title={value.title} subtitle={value.subtitle} section={section} />
            ))}
        </Row>
        </>
    )
}
Component.propTypes = {
    listServices: PropTypes.array.isRequired,
    section: PropTypes.number.isRequired
};
export default Component