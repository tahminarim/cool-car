import React from 'react';
import Advertise from '../Advertise/Advertise';
import CarsCategories from '../CarsCategories/CarsCategories';
import HomeSection from '../HomeSection/HomeSection';
import OurServices from '../OurServices/OurServices';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='grid grid-col-1' >
            <div className='flex  justify-around'  style={{ backgroundImage: `url("https://i.pinimg.com/originals/d0/4f/0f/d04f0f8d9e8eabd4a189c9d369c8e4d5.jpg")` }}>
                <Slider></Slider>

                <HomeSection></HomeSection>
            </div>

            <div>
                <CarsCategories></CarsCategories>
            </div>
            <div>
                <Advertise></Advertise>
            </div>
            <div>
                <OurServices></OurServices>
            </div>

        </div>
    );
};

export default Home;