import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu , setMenu] = useState([]) ;
    useEffect( () => {
        fetch("menu.json")
        .then(res => res.json())
        .then (data => {
            const popularItems = data.filter(items => items.category === "popular")
            setMenu(popularItems)
        })
    } , [])
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
            menu.map( (item , index) => <MenuItem
            key={index}
            item={item}
            ></MenuItem>)
        }
       </div>
       </section>
    );
};

export default PopularMenu;