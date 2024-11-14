import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, } from 'swiper/modules';
const Component = ({slider}) => {
    const swiperConfig = {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 1,
            },
        },
        modules: [Autoplay, Pagination]
    };
    return(
        <>
        <Swiper {...swiperConfig}>
            {slider.map((value, index) => (
                <SwiperSlide key={index}>
                    <img src={value.imgSrc} alt="img.jpg" className="img-fluid"/>
                </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
        </Swiper>
        </>
    )
}
Component.propTypes = {
    slider: PropTypes.array.isRequired,
};
export default Component