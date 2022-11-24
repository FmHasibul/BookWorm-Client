import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const { googleProvider, signIn } = useContext(AuthContext)
    const googleLoginProvider = new GoogleAuthProvider()
    const { register, handleSubmit } = useForm()
    const handleLoginSubmit = data => {
        signIn(data.email, data.password)
            .then(result =>
                console.log(result.user))
    }

    const googleLogin = () => {
        googleProvider(googleLoginProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((err) => {
                console.log('error =', err)
            })
    }
    return (
        <div>
            <div className="card mx-auto w-full max-w-sm shadow-2xl bg-slate-300">
                <form onSubmit={handleSubmit(handleLoginSubmit)} className="card-body">
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
                        <button type='submit' className="btn btn-secondary">Login</button>
                    </div>

                </form>

                <div className="form-control mx-7 pb-7">
                    <button onClick={googleLogin} className="btn btn-secondary">Sign in With Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;