import React from 'react';

const CarsCategories = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 m-5'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl px-6">
                <figure><img src="https://m.atcdn.co.uk/ect/media/%7Bresize%7D/37888a2cf01b4c4895b43d53d000e09f.jpg" alt="Cars" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Hybrid Cars!</h2>
                    <p>It's a car that has more than one source of power. It combines a conventional diesel or petrol engine with an electric motor to power the car.
                        The benefits of a hybrid include high fuel economy and low CO2 emissions compared with standard petrol and diesel engines – if used in the right way.
                        Some can run on electric power alone for short distances, improving economy and emissions even further.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Our Hybrid Cars</button>
                    </div>
                </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/story/hero_image/2022-tesla-charging.jpg" alt="Cars" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Electric Cars!</h2>
                    <p>Electric vehicles can have significant emissions benefits over conventional vehicles. All-electric vehicles produce zero tailpipe emissions,
                        and PHEVs produce no tailpipe emissions when operating in all-electric mode.
                        Electric vehicles have many benefits, including:
                        Cleaner environment.
                        No congestion charge.
                        Lower running costs.
                        Renewable electricity tariffs.
                        Better driving experience.
                        Government funding.
                        Free parking.
                        Reduced noise pollution.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Our Electric Cars</button>
                    </div>
                </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><img src="https://avtotachki.com/wp-content/uploads/2020/06/toplivo-0.jpg" alt="Cars" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Essence Cars!</h2>
                    <p>It is environmentally cleaner and above all, helps motorists save money every time they fill up, without this hampering vehicle performance”</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Our Essence Cars</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarsCategories;