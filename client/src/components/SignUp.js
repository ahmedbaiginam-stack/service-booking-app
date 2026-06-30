import React, { useState } from 'react';
import axios from '../axios/axios';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {

    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const userData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            company_id: ""
        };

        try {

            await axios.post('/user', userData);

            alert("Registration Successful!");

            history.push('/login');

        } catch (error) {

            console.error(error);
            alert("Registration Failed");

        }
    };

    return (
        <div className="sm-container">

            <h3>Sign Up</h3>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

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

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                </div>

                <br />

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Sign Up
                </button>

            </form>

            <br />

            <Link to="/login">
                Already have an account? Login
            </Link>

        </div>
    );
};

export default SignUp;