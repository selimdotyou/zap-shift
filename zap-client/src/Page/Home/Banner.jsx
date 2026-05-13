import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import BannerImg1 from "../../assets/banner/banner1.png";
import BannerImg2 from "../../assets/banner/banner2.png";
import BannerImg3 from "../../assets/banner/banner3.png";
import { Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Autoplay]} className="mySwiper max-h-[600px] my-4">
            <SwiperSlide>
                <img className="h-full" src={BannerImg1} alt="Banner 1" className="w-full h-auto" />
                <div className=" absolute bottom-20 lg:left-50 left-30 transform -translate-x-1/2 lg:-translate-y-7 translate-y-15">
                    <div className="flex space-x-4">
                        <button className="lg:px-4 lg:py-2 px-1 py-1 lg:text-sm text-xs text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-600 hover:text-white">
                            Track Your Parcel
                        </button>
                        <button className="ml-2 lg:px-4 lg:py-2 px-1 py-1 lg:text-sm text-xs text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                            Be a Rider
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="h-full" src={BannerImg2} alt="Banner 2" className="w-full h-auto" />
                <div className=" absolute bottom-20 lg:left-50 left-30 transform -translate-x-1/2 lg:-translate-y-7 translate-y-15">
                    <div className="flex space-x-4">
                        <button className="lg:px-4 lg:py-2 px-1 py-1 lg:text-sm text-xs text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-600 hover:text-white">
                            Track Your Parcel
                        </button>
                        <button className="ml-2 lg:px-4 lg:py-2 px-1 py-1 lg:text-sm text-xs text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                            Be a Rider
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="h-full" src={BannerImg3} alt="Banner 3" className="w-full h-auto" />
                <div className=" absolute bottom-20 lg:left-50 left-30 transform -translate-x-1/2 lg:-translate-y-7 translate-y-15">
                    <div className="flex space-x-4">
                        <button className="lg:px-4 lg:py-2 px-1 py-1 lg:text-sm text-xs text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-600 hover:text-white">
                            Track Your Parcel
                        </button>
                        <button className="ml-2 lg:px-4 lg:py-2 px-1 py-1 lg:text-sm text-xs text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                            Be a Rider
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;