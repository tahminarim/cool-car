import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const OneCar = ({car}) => {
    const { _id, image, description, price, name } = car;
    const {  loading } = useContext(AuthContext);
    if (loading) {
      return <>
          <div class="flex justify-center items-center">
              <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                  <span class="visually-hidden">Loading...</span>
              </div>
          </div></>
  }
    return (
      <div className="hero mr-3 bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
  
          <div>
                <img alt="dish" src={image} className="max-w-xs rounded-lg shadow-2xl" />
           
          </div>
          <div className='grid'>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{price}€ </p>
  
           
                <p>{description}</p>
           
            <div className='flex justify-between'>
              <Link className='' to={`/checkout/${_id}`}> <button className="btn btn-primary text-white m-2 ">Buy Now</button></Link>
            </div>
  
          </div>
        </div>
      </div>
    );
};

export default OneCar;