import React from 'react';

const FoodCard = ({item}) => {
    const {name  , recipe , image , price} = item ;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image}  className='h-[300px]' alt="Shoes" /></figure>
                <p className='absolute right-10 top-10 font-semibold text-xl text-white bg-slate-900 rounded-2xl p-2'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;