import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Progress from '../../../../Progress/Progress';
import useTitle from '../../../../../Hooks/UseTitle/useTitle'

const Allbuyers = () => {
    useTitle('Buyers')
    const url = `https://book-resell-server-fmhasibul.vercel.app/users/buyers?role=buyer`


    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users',],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            console.log(data);
            return data;

        }
    })

    const handleDelete = (id) => {
        const url = `https://book-resell-server-fmhasibul.vercel.app/users/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                window.confirm("Want to delete?");
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Deleted')
                }
                refetch()

            })
    }

    if (isLoading) {
        return <Progress />
    }


    return (
        <div className='my-5'>
            <h2 className="text-3xl mb-5 underline">All Buyers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete a users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={user._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td className="tooltip  tooltip-warning" data-tip="DELETE"><button onClick={() => handleDelete(user._id)} className='btn bg-red-600 text-2xl btn-sm'>X</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allbuyers;