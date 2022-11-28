import React, { useContext } from 'react';
import { AuthContext } from '../../../../../Context/AuthContext/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)

    const handlePostSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.itemName.value;
        const OriginalPrice = form.originalPrice.value;
        const sellerName = user.displayName
        const price = form.price.value;
        const email = user?.email;
        const location = form.location.value
        const used = form.period.value;
        const condition = form.condition.value;
        const categoryId = form.categoryid.value
        const categoryName = idToName(categoryId)

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
            categoryName

        }
        console.log(productData);

    }
    // categoryId to categoryName 
    const idToName = (id) => {
        if (id == 1) {
            return 'Acedemic'
        }
        else if (id == 2) {
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
                        <form onSubmit={handlePostSubmit} className="card-body">
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Books Name</span>
                                    </label>
                                    <input name="itemName" type="text" placeholder="Name of Your product" required className="input input-bordered input-sm" />
                                </div>
                                <div onBlur={idToName} className="p-0" >
                                    <label className="label">
                                        <span className="label-text">Books Category</span>
                                    </label>
                                    <select name='categoryid' className="select w-full select-sm select-bordered">
                                        <option value={1} selected>Academic</option>
                                        <option value={2}>Literature</option>
                                        <option value={3}>Fantasy</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Image</span>
                                    </label>
                                    <input type="text" name="picture" placeholder="Image Url" className="input input-bordered input-sm" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Original Price</span>
                                    </label>
                                    <input type="number" name="originalPrice" placeholder="Original Price" require className="input input-bordered input-sm" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" placeholder="Price" required className="input input-bordered input-sm" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="Text" name="location" placeholder="Price" required className="input input-bordered input-sm" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Year of using</span>
                                    </label>
                                    <input type="Text" name="period" placeholder="Using Period" required className="input input-bordered input-sm" />
                                </div>
                                <div  >
                                    <label className="label">
                                        <span className="label-text">Choose product condition</span>
                                    </label>
                                    <select name='condition' className="select w-full select-sm select-bordered">
                                        <option value={1} selected>Excellent</option>
                                        <option value={2}>Good</option>
                                        <option value={3}>Fair</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Phone Number</span>
                                    </label>
                                    <input type="number" name="number" placeholder="Phone number " required className="input input-bordered input-sm" />
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