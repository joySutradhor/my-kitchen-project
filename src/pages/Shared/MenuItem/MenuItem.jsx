import React from 'react';

const MenuItem = ({item}) => {
    const {name , price , recipe , image} = item ;
    return (
        <div className='flex space-x-4 space-y-0 items-center'>
            <img className='h-[50px] w-[50px] rounded-full' src={image} alt="" />
            <div>
                <h3 className='uppercase font-semibold'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;