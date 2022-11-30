import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Progress from '../../Progress/Progress';
import ProductCard from './ProductCard';

const Advertise = () => {
    const url = `https://book-resell-server-fmhasibul.vercel.app/advertise`
    // https://book-resell-server-fmhasibul.vercel.app/category
    const { data = [], isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            return data
        }
    })
    if (isLoading) {
        <Progress />
    }
    // console.log(data);
    return (
        <>

            {data.length > 0 &&
                <div className='my-10'>
                    <h3 className="text-3xl text-green-500 font-bold mb-5">Sponsered Product</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {data.map(singleProduct => <ProductCard
                            key={singleProduct._id}
                            singleProduct={singleProduct}
                        />)}
                    </div>

                </div>
            }
        </>



    );

};

export default Advertise;