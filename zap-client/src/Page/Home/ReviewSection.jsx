// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ReviewCard from './ReviewCard';
const ReviewSection = ({ reviewData }) => {
    return (
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {
            reviewData.map((item, index) => (
                <SwiperSlide key={index}>
                    <ReviewCard item={item} />
                </SwiperSlide>
            ))
        }
      </Swiper>
    );
};

export default ReviewSection;