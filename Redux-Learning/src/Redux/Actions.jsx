import {BUY_BOOK , SELL_BOOK } from './ActionTypes'

export const buy_book = () => {
    return {
        type : BUY_BOOK,
    }
}
export const sell_book = () =>{
    return {
        type : SELL_BOOK,
    }
}