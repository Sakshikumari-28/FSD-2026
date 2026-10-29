
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ logdata = [] }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function verification(e) {
        e.preventDefault();

        if (email === logdata[1]) {
            if (password === logdata[2]) {
                alert("Login successful!");
            } else {
                alert("Incorrect password");
            }
        } else {
            alert("Email is not registered");
        }
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Login Page</h2>

            <form onSubmit={verification}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your registered email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;

