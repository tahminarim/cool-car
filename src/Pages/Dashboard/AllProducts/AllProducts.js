import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {useQuery} from '@tanstack/react-query'
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllProducts = () => {
    const [deleting, setDeleting] = useState(null);

    const closeModal = () => {
        setDeleting(null);
    }


    const { data: products = [], refetch  } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:1000/allproducts', {
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
        fetch(`http://localhost:1000/products/${product._id}`, {
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

  

    return (
        <div>
            <h2 className="text-3xl">Our Products: {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Car</th>
                            <th>Price</th>
                            <th>Fuel</th>
                            <th>Condition</th>
                            <th>Location</th>
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
                                <td>{product.fuel}</td>
                                <td>{product.condition}</td>
                                <td>{product.location}</td>
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

export default AllProducts;