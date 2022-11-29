import React from 'react';

const MyProductCard = ({ product, i }) => {

    const { condition, location, name, originalPrice, picture, price, sellerName, status, used, } = product
    return (
        <div>
            <div className="card w-96  bg-base-100 shadow-xl image-full">
                <figure><img className='max-h-60' src={picture} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {name}</h2>
                    <p>{status === 'available' && 'In Stock'}</p>
                    <p>Product No:{i}</p>
                    <p>Selling Price:{price}$</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Advertise</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProductCard;