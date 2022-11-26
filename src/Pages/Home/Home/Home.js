import React from 'react';
import CarsCategories from '../CarsCategories/CarsCategories';
import HomeSection from '../HomeSection/HomeSection';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='grid grid-col-1' >
            <div className='flex  justify-around'>
                <Slider></Slider>

                <HomeSection></HomeSection>
            </div>

            <div>
                <CarsCategories></CarsCategories>
            </div>

        </div>
    );
};

export default Home;