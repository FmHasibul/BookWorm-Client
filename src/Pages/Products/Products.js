import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Product from './Product/Product';

const Products = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <>

            <h3 className='uppercase font-semibold text-3xl mt-20 text-orange-500'>Product on this category</h3>
            <div className='grid md:grid-cols-2 mx-auto my-16 gap-8 container'>
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }

            </div>
        </>
    );
};

export default Products;