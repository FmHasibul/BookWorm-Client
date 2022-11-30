
import Header from '../../Pages/Shared/Header/Header';
import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';

const DashboardLayouts = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

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
                                {
                                    (isSeller || isAdmin) && <>
                                        <li><Link to='/dashboard/addProducts'>Add a Products</Link></li>
                                        <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                    </>
                                }

                                {/* for admin */}
                                {
                                    isAdmin && <>
                                        <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
                                        <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
                                        <li><Link to='/dashboard/users'>Manage Users</Link></li>
                                    </>
                                }
                                {/* for All  */}
                                <li><Link to='/dashboard'>My Orders</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayouts;