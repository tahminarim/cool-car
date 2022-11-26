import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import OneCar from '../OneCar/OneCar';

const AllCars = () => {
    const [cars, setCars] = useState([]);
    const {  loading } = useContext(AuthContext);



    useEffect(() => {
        fetch('http://localhost:1000/allproducts')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    if (loading) {
        return <>
            <div class="flex justify-center items-center">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div></>
    }
    return (
        <div className='bg-blue-200'>
     
            <div className='text-center mb-4 '>
                <h2 className="text-5xl font-semibold text-blue-500">Our Cars</h2>

            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    cars.map(car=> <OneCar
                        key={car._id}
                        car={car}
                    ></OneCar>)
                }
            </div>

        </div>
    );
};

export default AllCars;