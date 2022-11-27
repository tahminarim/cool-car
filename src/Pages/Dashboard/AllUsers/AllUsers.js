import React, { useState } from 'react';
import { useQuery} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const [deleting, setDeleting] = useState(null);

    const closeModal = () => {
        setDeleting(null);
    }

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:1000/users', {
                headers: {
                   // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log('users data',data)
            return data;
        }
    })
    const handleVerification = id => {
        fetch(`http://localhost:1000/users/admin/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verification completed successful.')
                    refetch();
                }
            })

        
    }

    
    const handleDelete = id => {
       console.log('delete user is',id)
        fetch(`http://localhost:1000/users/${id}`, {
            method: 'DELETE',
            headers: {
            //    // authorization: `bearer ${localStorage.getItem('accessToken')}`
         
             }
        })
        .then(res => res.json())
        .then(data => {
            console.log('delete dta is',data);
            if(data.deletedCount > 0){
                
                toast.success(` deleted successfully`)
                refetch();
            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verfication</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user?.verify !== 'verifieduser' && <button onClick={() => handleVerification(user._id)} className='btn btn-xs btn-primary'>
                                    Verified User</button>}
                                </td>
                                <td><label onClick={() => setDeleting(user._id)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
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

export default AllUsers;