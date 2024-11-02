import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteBook = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.delete(`http://localhost:3001/book/book/${id}`);
                if (res.data.deleted) {
                    navigate('/books'); // Navigate after successful deletion
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchData(); // Call fetchData function
    }, [id, navigate]); // Make sure to include id and navigate in the dependency array

    return null;
};

export default DeleteBook;
