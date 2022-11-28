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
    return (
        <div>
            <h1>All sellers list heres</h1>
        </div>
    );
};

export default AllSellers;