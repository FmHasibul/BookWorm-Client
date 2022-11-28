import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Outlet, Link } from 'react-router-dom'

const DashboardLayouts = () => {
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            <>
                                {/* for seller  */}
                                <li><Link to='/dashboard/addProducts'>Add a Products</Link></li>
                                <li><Link>My Products</Link></li>
                                {/* for admin */}
                                <li><Link>All Sellers</Link></li>
                                <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/users'>All users</Link></li>
                                {/* for buyers  */}
                                <li><Link to='/dashboard/orders'>My Orders</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayouts;