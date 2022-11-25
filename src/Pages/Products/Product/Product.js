import React from 'react';

const Product = ({ product }) => {
    const { condition, location, name, originalPrice, picture, price, sellerName, status, used, _id } = product
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='max-h-60' src={picture} alt="Shoes" /></figure>
                <div className="card-body mx-10">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-around'>
                        <p className='text-orange-400'>Original Price $$: {originalPrice}</p>
                        <p className='text-green-500'>Price $: {price}</p>
                    </div>
                    <div className='flex justify-around'>
                        <p className=''>Location: {location}</p>
                        <p className=''>Used for: {used} Year</p>
                    </div>
                    <div className='flex justify-around'>
                        <p className=''>Condition: {condition}</p>

                        <p className=''>Stock: {status}</p>

                    </div>
                    <h2 className="card-title">Seller: {sellerName}</h2>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline hover:border-y-4 btn-sm w-1/2">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;