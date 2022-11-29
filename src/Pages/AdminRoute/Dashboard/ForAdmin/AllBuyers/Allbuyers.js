import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Progress from '../../../../Progress/Progress';

const Allbuyers = () => {

    const url = `http://localhost:5000/users/buyers?role=buyer`


    const { data: users = [], isLoading } = useQuery({
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

                                <td className="tooltip  tooltip-warning" data-tip="DELETE"><button className='btn bg-red-600 text-2xl btn-sm'>X</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allbuyers;