import React from 'react';

import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { useQuery } from '@tanstack/react-query';
import Progress from '../../Progress/Progress';

const Product = ({ product, setOrderProduct }) => {
    const { condition, location, name, originalPrice, email, picture, price, sellerName, status, used, } = product
    console.log(email);
    const modalhandle = () => {
        setOrderProduct(product)
        // console.log(' im here');
    }
    const url = `https://book-resell-server-fmhasibul.vercel.app/users/sellerVerify/${email}`
    const { data = [], isLoading } = useQuery({
        queryKey: ['products', email],
        queryFn: async () => {
            const res = await fetch(url, {

            })
            const data = await res.json();
            console.log(data?.isVerified);
            return data

        }
    })
    if (isLoading) {
        <Progress />
    }

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
                    <h2 className="card-title">Seller: {sellerName}<span className='ml-3 text-green-600'>{data?.isVerified && <FaCheckCircle />}</span></h2>
                    <div className="card-actions justify-center">
                        <label onClick={modalhandle} htmlFor="order-modal" className="btn btn-outline hover:border-y-4 btn-sm w-1/2">Order Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;