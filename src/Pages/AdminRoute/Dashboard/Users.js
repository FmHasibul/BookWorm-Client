import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Users = () => {
    const url = `http://localhost:5000/users`
    const { data = [], isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: () => fetch(url)
            .then(res => res.json())

    })
    console.log(data);


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;