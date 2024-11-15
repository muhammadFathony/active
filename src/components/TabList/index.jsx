import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import TabItem from "../TabItem";
const Component = ({ tabList, onTabClick }) => {
    return (
        <>
            <Col lg="4" className="js-custom-dots">
                {tabList?.map((value, index) => (
                    <TabItem
                        key={index}
                        title={value.title}
                        subtitle={value.subtitle}
                        onClick={() => onTabClick(index)}
                    />
                ))}
            </Col>
        </>
    )
}
Component.propTypes = {
    tabList: PropTypes.array.isRequired,
    onTabClick: PropTypes.func.isRequired
}
export default Component