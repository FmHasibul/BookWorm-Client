import React from 'react';
import toast from 'react-hot-toast';


// Advertise Product Card 
const ProductCard = ({ singleProduct }) => {
    const { condition, location, name, originalPrice, picture, price, sellerName, status, used, _id } = singleProduct

    const handleDelete = (id) => {
        const url = `https://book-resell-server-fmhasibul.vercel.app/advertise/${id}`
        console.log(id);
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                window.confirm("Is this Product Sold? Want to remove?");
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('deleted')
                }
            })
    }

    return (
        <div>
            <div className="card card-compact max-h-96 bg-base-100 shadow-xl">
                <figure><img className='' src={picture} alt="Shoes" /></figure>
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
                        <button onClick={() => handleDelete(_id)} data-tip="Want to Remove?" className="btn btn-outline hover:border-y-4 btn-sm w-1/2 tooltip  tooltip-warning"> Sold</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;