import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

const Registration = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState('')
    console.log(data);
    return (
        <div>
            <h1>Register Here</h1>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="card mx-auto w-full max-w-sm shadow-2xl bg-slate-300">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("Email")} type="text" placeholder="Email" className="input input-bordered" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Choose account type</span>
                        </label>
                        <select {...register("role", { required: true })} className="select select-bordered">
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Create an Account</Link>
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