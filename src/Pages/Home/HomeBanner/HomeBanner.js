import React from 'react';
import selves from '../../../assets/julia-joppien--3wygakaeQc-unsplash.jpg'

const HomeBanner = () => {
    return (
        <div>
            <div className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-1/2'>
                        <img alt='book selve' src={selves} className="ma max-h-[500px] shadow-2xl" />
                    </div>
                    <div  >
                        <h1 className="text-5xl text-left font-bold">A reader lives a thousand lives before he dies</h1>
                        <p className="py-6 text-left">Choose your <span className="font-bold text-green-500 uppercase">best Friend</span> form us.
                            A good books. <br /> Reading is essential for those who seek to rise above the <span className="font-bold text-green-500 uppercase"> Ordinary</span> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;