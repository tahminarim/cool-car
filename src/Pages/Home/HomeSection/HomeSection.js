import React from 'react';


const HomeSection = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("https://www.wallpapertip.com/wmimgs/220-2203876_beautiful-car-background-hd-3d-car-background-hd.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">WELCOME TO COOLCAR</h1>

                    <p className="mb-5">
                        BUY YOUR CAR AND 
                    SELL YOUR CAR  WITH EUROPE'S LARGEST VEHICLE MARKETPLACE COOLCAR
                    </p>
                    <button className="btn btn-primary">Let's start</button>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;