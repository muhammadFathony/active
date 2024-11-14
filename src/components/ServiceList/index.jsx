import { Row } from "react-bootstrap"
import PropTypes from 'prop-types';
import ServiceItem from "../ServiceItem"
const Component = ({listServices}) => {
    return(
        <>
        <Row className="gy-4 justify-content-center">
            {listServices?.map((value, index) => (
                <ServiceItem key={index} title={value.title} subtitle={value.subtitle} />
            ))}
        </Row>
        </>
    )
}
Component.propTypes = {
    listServices: PropTypes.array.isRequired,
};
export default Component