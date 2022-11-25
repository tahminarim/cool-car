import React from 'react';
import HomeSection from '../HomeSection/HomeSection';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='flex  justify-around'>
            
            
            <Slider></Slider>

            <HomeSection></HomeSection>
        </div>
    );
};

export default Home;