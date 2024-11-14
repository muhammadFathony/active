import react, {useState} from "react";
import { Carousel } from "react-bootstrap"
import PropTypes from 'prop-types';
const Component = ({listCarousel}) => {
    const [list, setList] =  useState(listCarousel);
    const imgStyles = {
        height: "600px",
        objectFit: "cover",
        objectPosition: "center",
        width: "100%"
    };
    return (
        <>
            <Carousel fade>
                {list.map((value, index) => (
                    <Carousel.Item key={index}>
                        <img style={imgStyles} src={value.imgSrc} alt="Image" className="img-fluid" />
                        <Carousel.Caption>
                            <h3>{value.title}</h3>
                            <p>{value.subtitle}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

Component.propTypes = {
    listCarousel: PropTypes.array.isRequired,
};
export default Component;