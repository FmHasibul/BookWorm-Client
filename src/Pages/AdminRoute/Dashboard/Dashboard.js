import React from 'react';

import { FaSmileBeam } from "@react-icons/all-files/fa/FaSmileBeam";

const Dashboard = () => {
    return (
        <div>
            <div className=" flex items-center justify-center  h-screen  bg-gradient-to-r    from-green-200    to-lime-100  ">
                <div className="px-10 py-20 glass rounded-md shadow-xl">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-green-900 transition-shadow animate-bounce text-9xl"><FaSmileBeam /></h1>

                        <h6 className="mb-2 text-2xl animate-pulse font-bold text-center text-gray-800 md:text-3xl">
                            <span className="text-red-500">Wellcome!!</span> You are in Dashboard
                        </h6>

                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            Select From Left TaskBar
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;