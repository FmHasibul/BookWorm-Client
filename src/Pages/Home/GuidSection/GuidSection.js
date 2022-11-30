import React from 'react';
import gather from '../../../assets/gather.svg'
import verify from '../../../assets/verified-symbol-icon.svg'
import buysell from '../../../assets/buysell.svg'

const GuidSection = () => {
    return (
        <div className='container my-10'>
            <h2 className="text-3xl mb-[-30px]  text-green-600 font-semibold ">How You can Be Seller!!</h2>
            <h2 className="text-3xl mb-10 animate-pulse text-gray-700-600 font-semibold decoration-double ">...............     ...............        ............</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card justify-center text-center  ">
                    <img className='w-3/2 container mx-auto' src={gather} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title justify-center">
                            Gather Your sellable Books..
                        </h2>
                        <div className="badge text-green-700 badge-secondary">Step 1</div>
                        <p className='text-xs'>Choose  your books  which You have finished reading , and want to sell. Make sure those are in good quality </p>

                    </div>
                </div>
                <div className="card  ">
                    <img className='w-1/2 container mx-auto' src={verify} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title justify-center">
                            Get Verified
                        </h2>
                        <div className="badge text-green-700 badge-secondary">Step 2</div>
                        <p className='text-xs'>Create an account to confirm who you are. An admin will review your request for approval.</p>

                    </div>
                </div>
                <div className="card  ">
                    <img className='w-1/2 container mx-auto' src={buysell} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title justify-center">
                            Buy and Sell safely
                        </h2>
                        <div className="badge text-green-700 badge-secondary">Step 3</div>
                        <p className='text-xs'>Transact with other verified people in your neighbourhood. Sell stuff quickly and find amazing bargains.</p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default GuidSection;