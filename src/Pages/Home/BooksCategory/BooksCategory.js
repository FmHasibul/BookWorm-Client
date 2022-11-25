import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const BooksCategory = () => {
    const { data = [], isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: () => fetch(`http://localhost:5000/category`)
            .then(res => res.json())

    })
    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-10 '>
            {
                data.map(ctg => <Link to={`/category/${ctg.categoryId}`} key={ctg._id} className="card glass hover:shadow-lg text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title text-gray-500  justify-center">{ctg.categoryName} </h2>
                    </div>
                </Link>)
            }

        </div>
    );
};

export default BooksCategory;

{/* <div className="card w-96 bg-slate-400 text-primary-content">
    <div className="card-body">
        <h2 className="card-title">Card title!</h2>
    </div>
</div> */}