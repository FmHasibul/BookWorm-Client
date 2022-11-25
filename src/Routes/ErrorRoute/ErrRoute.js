import React from 'react';
import { Link } from 'react-router-dom'

const ErrRoute = () => {
    return (
        <div>
            <div className=" flex items-center justify-center w-screen  h-screen  bg-gradient-to-r    from-rose-200    to-yellow-100  ">
                <div className="px-40 py-20 glass rounded-md shadow-xl">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-red-900 transition-shadow animate-bounce text-9xl">404</h1>

                        <h6 className="mb-2 text-2xl animate-pulse font-bold text-center text-gray-800 md:text-3xl">
                            <span className="text-red-500">Oops!</span> Page not found
                        </h6>

                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            The page you’re looking for doesn’t exist.
                        </p>

                        <Link
                            to='/'
                            className="px-6 py-2 text-sm font-semibold text-green-600 bg-slate-300"
                        >Go home</Link>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ErrRoute;