import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/gif.gif'

const ErrorPage = () => {
    return (
        <div className='grid justify-center m-11'>
            <h2 className=" text-red-700 font-extrabold text-6xl text-center">404 Error Page</h2>

            <div className="card w-96 glass grid justify-center m-9">

                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <p></p>
                    <div className="card-actions justify-end">
                        <Link to="/"><button className="btn btn-primary">Go to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;