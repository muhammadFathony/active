import {useRef, useEffect, act} from "react";
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, } from 'swiper/modules';
const Component = ({slider, activeIndex}) => {
    const swiperRef = useRef(null);
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
        modules: [Autoplay, Pagination],
        onSwiper: (swiper) => {
            swiperRef.current = swiper
        }
    };
    useEffect(() => {
        if (swiperRef.current && typeof activeIndex === 'number') {
            swiperRef.current.slideTo(activeIndex);
        }
    }, [activeIndex]);
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
    activeIndex : PropTypes.number.isRequired
};
export default Component