import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>

                <NavLink
                    to="/shop"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}
                >
                    Shop
                </NavLink>

                <NavLink
                    to="/review"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}
                >
                    Order Review
                </NavLink>

                <NavLink
                    to="/inventory"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}
                >
                    Manage Inventory
                </NavLink>

                <NavLink
                    to="/signin"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}
                >
                    Sign In
                </NavLink>
                
            </nav>
        </div>
    );
};

export default Header;