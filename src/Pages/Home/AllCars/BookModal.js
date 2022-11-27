import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookModal = ({ appoinment }) => {
    const { name,email,rprice,sellername } = appoinment;
    console.log('data in modal', appoinment)
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <>
          <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div></>
      }
    
    
      const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const sellername = form.sellername.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const location = form.location.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
          sellername,
          name,
          email,
          location,
          phone,
          price
        }
        console.log('book ing', booking)
    
    
    
        fetch('http://localhost:1000/booking', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.acknowledged) {
              toast.success('Booking confirmed');
              //form.reset()
              //navigate('/')
            }
            else {
              toast.success(data.message);
            }
          })
    
    
      }
    return (
        <>

            <input type="checkbox" id="booked-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative bg-white">
              <label htmlFor="booked-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">{name}</h3>


              <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10 '>
                <input name="price" type="number"  value={rprice} className="input w-full input-bordered " readOnly />
                <input name="sellername" type="text" defaultValue={sellername}  placeholder="Your Name" className="input w-full input-bordered" />
                <input name="email" type="email" defaultValue={email}  placeholder="Email Address" className="input w-full input-bordered" />
                <input name="name" type="text" defaultValue={name} placeholder="Car Name" className="input w-full input-bordered" readOnly />
                <input name="phone" type="number" placeholder="Phone Number" className="input w-full input-bordered" />
                <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                <br />
                <input className='btn btn-primary w-full' type="submit" value="Submit" />
              </form>
            </div>
          </div>


        </>
    );
};

export default BookModal;