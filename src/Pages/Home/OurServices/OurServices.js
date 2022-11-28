import React from 'react';
import a from '../../../assets/icon/a.jpg'
import b from '../../../assets/icon/b.jpg'
import c from '../../../assets/icon/c.jpg'
import d from '../../../assets/icon/d.jpg'
import Service from './Service';


const OurServices = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Controlled cars',
            description: 'Cars are checked and are in perfect mechanical condition',
            img: a,
        },
        {
            id: 2,
            name: 'Best quality and price',
            description: 'Family, sports, electric, utility... Find your happiness in a few clicks.',
            img: b,
        },
        {
            id: 3,
            name: 'Guarantee included',
            description: 'CapCar is almost like new, without the price of new, with a minimum 6 month warranty.',
            img:c,
        },
        {
            id: 4,
            name: 'Satisfied or refunded',
            description: 'Buy without stress, you have 7 days to change your mind and get your money back!',
            img:d,
        },
    ]

    return (
        <div className='mt-16'>
        <div className='text-center'>
            <h3 className='text-5xl font-bold text-primary uppercase'>Welcome to COOLCAR</h3>
            <h2 className='text-3xl'>Buy a used car without stress: we accompany you from A to Z!</h2>
        </div>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default OurServices;