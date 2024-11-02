import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setRole }) => {
    const navigate = useNavigate(); // Added parentheses

    useEffect(() => {
        axios.get('http://localhost:3001/auth/logout')
            .then(res => {
                if (res.data.logout) { // Ensure the property name matches the response from the server
                    setRole('');
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }, []);

    return null; // Ensure that a component is returned
};

export default Logout;
