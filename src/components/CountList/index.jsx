import { Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import CountItem from "../CountItem";
const Component = ({listCount}) => {
    return (
        <>
            <Row className="mb-5 count-numbers">
                {listCount?.map((value, index) => (
                <CountItem key={index} total={value.total} title={value.title}/>
                ))}
            </Row>
        </>
    )
}
Component.propTypes = {
    listCount: PropTypes.array.isRequired,
};
export default Component