
import React, { useContext, useState, } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import useTitle from '../../../Hooks/UseTitle/useTitle';
import useJWT from '../../../Hooks/useJWT.js'


const Registration = () => {
    const { createNewUser, userProfileInfo } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [userEmail, setUserEmail] = useState('')
    useTitle('Registration')

    const [token] = useJWT(userEmail)
    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }


    const handleRegSubmit = (data) => {

        createNewUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                toast.success('Account created successfully')
                const userInfo = {
                    displayName: data.name
                }
                userProfileInfo(userInfo)
                    .then(() => {
                    })
                    .catch(err => console.log(err))
                console.log(data);
                saveUserInDb(data?.name, data?.email, data?.role)
                setUserEmail(data.email)
            })
            .catch(err =>
                console.log(err))

    }
    const saveUserInDb = (name, email, role) => {
        const user = { name, email, role }
        fetch('https://book-resell-server-fmhasibul.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('save user', data);

            })
    }

    return (
        <div>
            <h1>Register Here</h1>

            <form onSubmit={handleSubmit(handleRegSubmit)} className="card mx-auto w-full max-w-sm shadow-2xl bg-slate-300">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="text" placeholder="Email" className="input input-bordered" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Choose account type</span>
                        </label>
                        <select {...register("role", { required: true })} className="select select-bordered">
                            <option value='buyer' >Buyer</option>
                            <option value='seller' >Seller</option>
                        </select>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true, minLength: 6 })} type="text" placeholder="password" className="input input-bordered" />
                        {errors.password && <p>Password should be at least 6 Unit</p>}
                        <label className="label">
                            <p>Allready have an account ?<Link to='/login' className="label-text-alt link link-hover">Login</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Registration;