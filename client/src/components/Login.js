import React, { useState } from 'react';
import axios from '../axios/axios';
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/login', {
                email,
                password
            });

            alert('Login Successful');

            localStorage.setItem(
                'user',
                JSON.stringify(res.data)
            );

            history.push('/');
        } catch (err) {
            console.log(err);

            if (err.response) {
                alert(
                    'Status: ' +
                    err.response.status +
                    '\n' +
                    JSON.stringify(err.response.data)
                );
            } else {
                alert('No response from server');
            }
        }
    };

    return (
        <div className="sm-container">
            <h3>Login</h3>

            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label>

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <br />

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Login
                </button>
            </form>

            <br />

            <Link to="/signup">
                Don't have an account? Sign Up
            </Link>
        </div>
    );
};

export default Login;