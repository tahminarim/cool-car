import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {


    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-tahminarim.vercel.app/bookings', {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log('bookings data', data)
            return data;
        }
    })


    return (
        <div>
            <h2 className="text-3xl">Orders History</h2>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Car Brand</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img src={booking.image} alt='car' />
                                        </div>
                                    </div>

                                </td>
                                <td>{booking.name}</td>
                                <td>{booking.price}</td>
                                <td>{

                                    booking.price && !booking.paid &&
                                    <Link to={`/dashboard/payment/${booking._id}`}>
                                        <button
                                            className='btn btn-primary'
                                        >
                                            Pay

                                        </button>
                                    </Link>

                                }

                                    {

                                        booking.price && booking.paid && <button
                                            className='text-gray-400'
                                        >
                                            Paid

                                        </button>

                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;