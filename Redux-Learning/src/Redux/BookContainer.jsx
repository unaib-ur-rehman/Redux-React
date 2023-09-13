import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {book_purchase , book_sell } from './Actions'


const BookContainer = () => {
   const numberofBooks = useSelector (state => state.noofBooks)  
   const dispatch = useDispatch ();
  return (
    <>
    <h1>Number of Books - {numberofBooks}</h1>
    <button onClick={()=> {dispatch(book_purchase())}}>Buy Book</button> 
    <button onClick={()=> {dispatch(book_sell())}}>Buy Book</button> 
 
    </>
  )
}

export default BookContainer