import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import img1 from "../../assets/brands/amazon.png";
import img2 from "../../assets/brands/amazon_vector.png";
import img3 from "../../assets/brands/casio.png";
import img4 from "../../assets/brands/moonstar.png";
import img5 from "../../assets/brands/randstad.png";
import img6 from "../../assets/brands/star.png";
import img7 from "../../assets/brands/start_people.png";
import { Autoplay } from 'swiper/modules';

const BrandCarucel = () => {
    return (
        <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} watchSlidesProgress={true}  modules={[Autoplay]}  slidesPerView={6} className="mySwiper">
            <SwiperSlide><img src={img1} alt="Brand 1" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="Brand 2" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="Brand 3" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="Brand 4" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="Brand 5" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="Brand 6" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="Brand 7" /></SwiperSlide>
        </Swiper>
    );
};

export default BrandCarucel;