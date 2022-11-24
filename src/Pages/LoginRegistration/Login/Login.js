import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm()
    const handleLoginSubmit = data => {

        console.log('hi', data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleLoginSubmit)} className="card mx-auto w-full max-w-sm shadow-2xl bg-slate-300">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email', { required: true })} type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to='/register' className="label-text-alt link link-hover">Create an Account</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;