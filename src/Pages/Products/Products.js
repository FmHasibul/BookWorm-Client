import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import OrderModal from '../OrderModal/OrderModal';
import Product from './Product/Product';

const Products = () => {
    const [orderProduct, setOrderProduct] = useState(null)
    const products = useLoaderData()
    return (
        <>

            <h3 className='uppercase font-semibold text-3xl mt-20 text-orange-500'>Product on this category</h3>
            <div className='grid md:grid-cols-2 mx-auto my-16 gap-8 container'>
                {
                    products.map(product => <Product
                        setOrderProduct={setOrderProduct}
                        key={product._id}
                        product={product} />)
                }

            </div>
            {
                orderProduct &&
                <OrderModal
                    orderProduct={orderProduct}
                    setOrderProduct={setOrderProduct}
                />
            }

        </>
    );
};

export default Products;