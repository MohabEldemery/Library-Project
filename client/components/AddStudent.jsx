import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [neptunId, setNeptunId] = useState('');
    const [username, setUsername] = useState('');
    const [semester, setSemester] = useState(''); // Updated state variable name
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/student/register', { neptunId, username, password, semester }) // Updated field names
            .then(res => {
                if (res.data.registered) {
                    navigate('/dashboard');
                }
                console.log("Success!");
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='student-form-container'>
            <form className='student-form' onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='form-group'>
                    <label htmlFor='neptunId'>Neptun:</label> {/* Updated label */}
                    <input type='text' id='neptunId' name='neptunId' 
                    onChange={(e) => setNeptunId(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='username'>User Name:</label>
                    <input type='text' id='username' name='username' 
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='semester'>Semester:</label> {/* Updated label */}
                    <input type='text' id='semester' name='semester' 
                    onChange={(e) => setSemester(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default AddStudent;
