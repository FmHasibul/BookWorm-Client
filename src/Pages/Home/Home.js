import React from 'react';
import BooksCategory from './BooksCategory/BooksCategory';
import GuidSection from './GuidSection/GuidSection';
import HomeBanner from './HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <HomeBanner />
            <BooksCategory />
            <GuidSection />

        </div>
    );
};

export default Home;