
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../Context/AuthContext/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const imgKey = `a23314678e70cf4f7a8c05f68caa3ef3`
    // console.log(imgKey);

    const { register, handleSubmit } = useForm()


    const handlePostSubmit = (itemData) => {
        const form = itemData;
        const name = form.itemName
        const OriginalPrice = form.originalPrice
        const sellerName = user.displayName
        const price = form.price
        const email = user?.email
        const location = form.location
        const used = form.period
        const condition = form.condition
        const categoryId = parseInt(form.categoryId)
        const categoryName = idToName(categoryId)
        const image = form.img[0]
        // console.log(picture);

        const formData = new FormData();
        formData.append('image', image);
        // console.log(formData.get('image'));
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgInfo => {
                if (imgInfo.success) {
                    const picture = imgInfo.data.url;
                    const productData = {
                        name,
                        OriginalPrice,
                        price,
                        status: 'available',
                        sellerName,
                        email,
                        location,
                        used,
                        condition,
                        categoryId,
                        categoryName,
                        picture,
                    }
                    console.log(productData);
                    fetch(`http://localhost:5000/products`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(productData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Product added')
                            console.log(data);
                        })
                }
            })


        // console.log(productData);


    }
    // categoryId to categoryName 
    const idToName = (id) => {
        if (id === 'a') {
            return 'Acedemic'
        }
        else if (id === 'b') {
            return 'Literature'
        }
        else {
            return 'Fantasy Book'
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="card w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handlePostSubmit)} className="card-body">
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Books Name</span>
                                    </label>
                                    <input {...register("itemName", { required: true })} name="itemName" type="text" placeholder="Name of Your product" required className="input input-bordered input-sm" />
                                </div>
                                <div onBlur={idToName} className="p-0" >
                                    <label className="label">
                                        <span className="label-text">Books Category</span>
                                    </label>
                                    <select {...register("categoryId", { required: true })} name='categoryId' className="select w-full select-sm select-bordered">
                                        <option value={'a'}>Academic</option>
                                        <option value={'b'}>Literature</option>
                                        <option value={'c'}>Fantasy</option>
                                    </select>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Original Price</span>
                                    </label>
                                    <input type="number" {...register("originalPrice", { required: true })} name="originalPrice" placeholder="Original Price" required className="input input-bordered input-sm" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" {...register("price", { required: true })} placeholder="Price" required className="input input-bordered input-sm" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="Text" name="location" {...register("location", { required: true })} placeholder="Price" required className="input input-bordered input-sm" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Year of using</span>
                                    </label>
                                    <input type="Text" name="period" {...register("period", { required: true })} placeholder="Using Period" required className="input input-bordered input-sm" />
                                </div>
                                <div  >
                                    <label className="label">
                                        <span className="label-text">Choose product condition</span>
                                    </label>
                                    <select name='condition' {...register("condition", { required: true })} required className="select w-full select-sm select-bordered">
                                        <option >Excellent</option>
                                        <option >Good</option>
                                        <option >Fair</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Phone Number</span>
                                    </label>
                                    <input type="number" name="number" {...register("number", { required: true })} placeholder="Phone number " required className="input input-bordered input-sm" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Image</span>
                                    </label>
                                    <input type="file" name="img" {...register("img", { required: true })} placeholder="Upload Photo" className="input input-bordered input-sm" />
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;