import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import BookModal from '../Home/BookModal/BookModal';
import OneCar from '../Home/OneCar/OneCar';

const DisplayElectricCar = () => {
    const [cars, setCars] = useState([]);
    const {  loading } = useContext(AuthContext);
    const {appoinment,setAppoinment}= useState(null)



    useEffect(() => {
        fetch('http://localhost:1000/electriccar')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCars(data)})
    }, [])

    if (loading) {
        return <>
            <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div></>
    }
    return (
        <div className='bg-blue-200'>
     
        <div className='text-center mb-4 '>
            <h2 className="text-5xl font-semibold text-blue-500">Our Electric Cars</h2>

        </div>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                cars.map(car=> <OneCar
                    key={car._id}
                    car={car}
                    setAppoinment={setAppoinment}
                ></OneCar>)
            }
        </div>
        { appoinment && <BookModal appoinment={appoinment}></BookModal>}

    </div>
    );
};

export default DisplayElectricCar;