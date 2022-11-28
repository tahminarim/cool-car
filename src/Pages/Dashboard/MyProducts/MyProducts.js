import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {
    const [deleting, setDeleting] = useState(null);

    const closeModal = () => {
        setDeleting(null);
    }


    const { data: products = [], refetch  } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://b612-used-products-resale-server-side-tahminarim.vercel.app/allproducts', {
                    headers: {
                        //authorization: `bearer ${localStorage.getItem('accessToken')}`
                        
                    }
                }
                );
                const data = await res.json();
                console.log(data)
                return data;
            }
            catch (error) {

            }
        }
    })

    
    const handleDelete = product => {
        fetch(`https://b612-used-products-resale-server-side-tahminarim.vercel.app/products/${product._id}`, {
            method: 'DELETE', 
            headers: {
               // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Car ${product.name} deleted successfully`)
            }
        })
    }

    const handleAdvertise = car => {
        fetch('https://b612-used-products-resale-server-side-tahminarim.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save  is',data);
    
            })

            fetch(`https://b612-used-products-resale-server-side-tahminarim.vercel.app/products/${car._id}`, {
                method: 'PUT',
    
            })
                .then(res => res.json())
                .then(data => {
                    console.log('modified',data)
                    if (data.modifiedCount > 0) {
                         // Navigate('/dashboard/myproducts')
    
                        toast.success('Advertisement completed successful.')
                        refetch();
                    }
                })

        
    }
  

    return (
        <div className=''>
            <h2 className="text-3xl">Our Products: {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Car</th>
                            <th>Price</th>
                            <th>Advertisement</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>{product.price || product.rprice}€</td>
                                <td>{product?.advertise !== 'advertise' && <button onClick={() => handleAdvertise(product)} className='btn btn-xs btn-primary'>
                                    Advertise</button>}
                                </td>
                                <td>
                                    <label onClick={() => setDeleting(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleting && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleting.name}. It cannot be undone.`}
                    successAction = {handleDelete}
                    successButtonName="Delete"
                    modalData = {deleting}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;