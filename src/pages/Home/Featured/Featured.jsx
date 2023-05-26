import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import "./Featured.css"

import FeaturedImg from "../../../assets/home/featured.jpg"


const Featured = () => {
    return (
        <section className='feautedItem'>
            <div>
                <SectionTitle
                    heading={"Featured Items"}
                    subHeading={"Check it out"}
                ></SectionTitle>
            </div>
            <div className='flex py-10 px-24 gap-10'>
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className='text-white'>
                    <p>Aug 20 , 2020</p>
                    <p className='uppercase'>Where get i some </p>
                    <p className='pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis suscipit illum, tenetur iste pariatur quo officiis ipsam rem quas necessitatibus. Debitis alias enim totam veniam assumenda tempora ipsam deserunt, ad odio repellendus nemo voluptates, suscipit inventore ipsum. Provident quaerat ex aperiam amet doloribus esse possimus! Obcaecati tempore perferendis veniam minus.</p>
                    <button className="btn btn-outline text-white"> Read More ...</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;