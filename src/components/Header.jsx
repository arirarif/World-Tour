import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider'; // Import AuthContext for user state

const Header = () => {
    const { user, logout } = useContext(AuthContext); // Get user state from context

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allvisas">All Visas</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/addVisa">Add Visa</NavLink></li>
                    <li><NavLink to="/myVisas">My Added Visas</NavLink></li>
                    <li><NavLink to="/myVisaApplications">My Visa Applications</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">WorldTour</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <img
                                src={user.photoURL || '/default-avatar.jpg'} // Fallback to default avatar if no photoURL
                                alt="User Avatar"
                                className="h-8 w-8 rounded-full cursor-pointer"
                                title={user.displayName || 'User'} // Show displayName on hover
                            />
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 hidden group-hover:block">
                                <p>{user.displayName || 'User'}</p>
                            </div>
                        </div>
                        <button onClick={logout} className="btn btn-primary">Logout</button>
                    </div>
                ) : (
                    <>
                        <NavLink to="/signin" className="btn btn-primary">Login</NavLink>
                        <NavLink to="/signup" className="btn btn-primary">Register</NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
