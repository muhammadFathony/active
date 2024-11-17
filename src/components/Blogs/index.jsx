import PropTypes from 'prop-types';
import { Row } from "react-bootstrap";
import BlogItem from "../BlogItem";
const Component = ({ listBlog }) => {
    return (
        <>
            <Row className="gy-4">
                {listBlog?.map((value, index) => (
                    <BlogItem 
                        key={index} 
                        img={value.img} 
                        imgUser={value.imgUser} 
                        title={value.title} 
                        subtitle={value.subtitle} 
                        creator={value.creator} 
                        position={value.position}
                        date={value.date}
                        category={value.category}
                    />
                ))}
            </Row>
        </>
    )
}
Component.propTypes = {
    listBlog: PropTypes.array.isRequired
}
export default Component