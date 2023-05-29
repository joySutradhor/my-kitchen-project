import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import UseMenu from '../../../Hooks/UseMenu';

const PopularMenu = () => {

    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === "popular")
    console.log(popular)
    return (
        <section>
            <div>
                <SectionTitle
                    heading={"From Our Menu"}
                    subHeading={"popular Items"}
                ></SectionTitle>

            </div>
            <div className='md:grid grid-cols-2 gap-5 mx-10 py-5 items-center'>
                {
                    popular.map((item, index) => <MenuItem
                        key={index}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;