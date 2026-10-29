
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="container mt-5">
            <h1>Welcome to Home Page</h1>

            <p>
                <Link to="/login">Login</Link>
            </p>

            <p>
                <Link to="/registration">Registration</Link>
            </p>
        </div>
    );
}

export default Home;

