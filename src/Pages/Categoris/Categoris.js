import React from 'react';
import { Link } from 'react-router-dom';

const Categoris = () => {
    return (
        <div>
            <div className="grid justify-center m-8">

            <Link to='/electriccar'><button className="btn btn-wide m-7 p-4 btn-outline btn-success">Add Electric Car are Here</button></Link>
            <Link to='/hybridcar'><button className="btn btn-wide m-7 p-4  btn-outline btn-info">Add Hybrid Car are Here</button></Link>
            <Link to='/essencecar'> <button className="btn m-7 p-4 btn-wide btn-outline btn-warning">Add Essence Car are Here</button></Link>
            <button className="btn m-7 p-4 btn-wide btn-outline btn-error">Diesel Car are Here</button>
            
            
            </div>


        </div>
    );
    
};

export default Categoris;