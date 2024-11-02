import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from './BookCard.jsx'
import '../src/css/Book.css'
const Books = ({role}) => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/book/books')
        .then(res =>{
            setBooks(res.data)
            console.log(res.data)
        }).catch(err =>console.log(err))

    },[])
    return (
        <div className='page'>

        <div className='book-list'>
            {
                books.map(book =>{
                     return <BookCard key ={book.id} book = {book} role = {role}> </BookCard>
                })
            }   
        </div>
        </div>
        
    )
}

export default Books;
