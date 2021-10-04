import React from 'react';

const Footer = () => {
    return (
        <div className="bg-success mt-4 text-white text-center footer">
            <div className="d-flex m-4 p-4">
                <div className="w-50">
                    <h2>Language School</h2>
                    <p>We are always ready teach our students.</p>
                </div>
                <div>
                    <h2>Contact Info</h2>
                    <li>email: exaple@languageschool.com</li>
                    <li>Call us: 880-2313xxx</li>
                </div>
            </div>
            <p>copyright&copy;2021.All rights reserved.</p>
        </div>
    );
};

export default Footer;