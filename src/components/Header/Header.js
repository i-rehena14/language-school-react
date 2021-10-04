import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white",
        backgroundColor: "lightblue"
    };
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-success">
            <div class="container-fluid">
                <NavLink className="text-white fw-bold navbar-brand" to="/home">Language School</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <NavLink className="text-white navbar-brand me-4" to="/home">Home</NavLink>
                        <NavLink className="text-white navbar-brand me-4" to="/services">Services</NavLink>
                        <NavLink className="text-white navbar-brand me-4" to="/faq">FAQ</NavLink>
                        <NavLink className="text-white navbar-brand me-4" to="/about">About Us</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        // <nav className="navbar navbar-dark bg-success ">



        // </nav>

    );
};

export default Header;