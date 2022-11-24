import React from 'react';
import GuidSection from './GuidSection/GuidSection';
import HomeBanner from './HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <HomeBanner />
            <GuidSection />

        </div>
    );
};

export default Home;