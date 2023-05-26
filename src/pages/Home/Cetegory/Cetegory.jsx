
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Cetegory = () => {
    return (
        <div className="mx-20 py-24">
            <SectionTitle 
            heading={"Form 11pm to 12pm"}
            subHeading={"Order Online"}
            >
               
            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className="text-2xl uppercase text-center absolute bottom-6 left-16">Tomato</p>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className="text-2xl uppercase text-center  -mt-16">Tomato</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className="text-2xl uppercase text-center  -mt-16">Green Tea</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className="text-2xl uppercase text-center  -mt-16">Cake</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <p className="text-2xl uppercase text-center  -mt-16">Vegetable</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Cetegory;