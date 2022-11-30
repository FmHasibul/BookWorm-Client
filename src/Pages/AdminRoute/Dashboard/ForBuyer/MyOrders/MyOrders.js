import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../../Context/AuthContext/AuthProvider';
import useTitle from '../../../../../Hooks/UseTitle/useTitle';
import Progress from '../../../../Progress/Progress';

const MyOrders = () => {
    useTitle('My Orders')
    const { user } = useContext(AuthContext)



    const url = `https://book-resell-server-fmhasibul.vercel.app/orders?email=${user?.email}`;

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
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
        <div>
            <div>
                <h3 className="text-3xl mb-8">My Orders</h3>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Phone Number</th>
                                <th>Meeting LOcation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((orders, i) => (
                                <tr key={orders._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{user?.displayName}</td>
                                    <td>{orders.product}</td>
                                    <td>{orders.price}$</td>
                                    <td>{orders.phone}</td>
                                    <td>{orders.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;