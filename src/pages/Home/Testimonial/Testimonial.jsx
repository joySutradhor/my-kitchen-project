import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <div>
                <SectionTitle
                    subHeading={"What out client Say "}
                    heading={"Testimonials"}
                ></SectionTitle>
            </div>
            <div className="mx-24">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review =>

                            <SwiperSlide key={review._id}>
                                <div className="flex justify-center items-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <div className="text-center px-20 py-10">
                                    <p>{review.details}</p>
                                    <h2 className="text-2xl text-yellow-500">{review.name}</h2>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;