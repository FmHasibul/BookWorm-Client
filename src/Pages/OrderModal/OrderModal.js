import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const OrderModal = ({ orderProduct, setOrderProduct }) => {
    const { user } = useContext(AuthContext)
    const { name, price, sellerName, _id } = orderProduct

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const buyerName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const order = {
            itemId: _id,
            buyer: buyerName,
            email,
            product: name,
            phone,
            location,
            price,
            sellerName

        }
        fetch('https://book-resell-server-fmhasibul.vercel.app/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setOrderProduct(null);
                    toast.success('Booking confirmed');

                }
                else {
                    toast.error(data.message);
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">You are ordering : {name}</h3>
                    <form onSubmit={handleOrder} className='  mt-5'>
                        <div className="grid grid-cols-2 gap-2">
                            <label className="label p-0">
                                Price
                            </label>
                            <input type="text" disabled value={`$ ${price} `} className="input w-full input-bordered " />
                            <label className="label p-0">
                                Name
                            </label>
                            <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                            <label className="label p-0">
                                Seller Name
                            </label>
                            <input name="sellerName" type="text" defaultValue={sellerName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                            <label className="label p-0">
                                User Email
                            </label>
                            <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                            <label className="label p-0">
                                Pickup location
                            </label>
                            <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                            <label className="label p-0">
                                Your Number
                            </label>
                            <input name="phone" type="number" placeholder="Phone Number" className="input w-full input-bordered" />
                            <br />
                        </div>
                        <input className='btn bg-lime-400 text-slate-600  hover:text-slate-100 w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;