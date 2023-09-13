import { buy_book , decrement_book } from "./BookTypes"

export const book_purchase = () =>{
    return {
        type : buy_book,

    }
}

export const book_sell =() =>{
    return{
        type : decrement_book,
    }
}

