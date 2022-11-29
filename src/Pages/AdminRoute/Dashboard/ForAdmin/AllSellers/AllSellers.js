import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const url = `http://localhost:5000/users/sellers?role=seller`
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data);
            return data;
        }
    });
    const handleVerifySeller = () => {

    }
    return (
        <div className='my-10'>
            <h2 className="text-3xl underline mb-5">All Sellers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete a users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={user._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'Admin' && <button onClick={() => handleVerifySeller(user._id)} className='btn btn-outline btn-sm'>Make Admin</button>}</td>
                                <td className="tooltip  tooltip-warning" data-tip="DELETE"><button className='btn bg-red-600 text-2xl btn-sm'>X</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;