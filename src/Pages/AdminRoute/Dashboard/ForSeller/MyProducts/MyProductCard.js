import React from 'react';
import toast from 'react-hot-toast';

const MyProductCard = ({ product, i }) => {
    const { name, picture, price, status, } = product

    const saveAdvertisedProduct = (product) => {
        // console.log(product);
        fetch('https://book-resell-server-fmhasibul.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('advertise', data);
                toast.success(`You Have Successfully Advertised ${name}`)

            })
    }

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
                        <button onClick={() => saveAdvertisedProduct(product)} className="btn btn-primary">Advertise</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProductCard;