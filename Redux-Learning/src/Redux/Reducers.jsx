import  {buy_book, decrement_book} from './BookTypes'


const initial_state ={
    noofBooks : 20 // initail state of action
}
 const BookReducer = (state = initial_state , action) =>{
    switch(action.type){
        case buy_book :
            return{
               ...state , noofBooks : state.noofBooks - 1 
            }
            case decrement_book :
                return{
                    ...state , noofBooks : state.noofBooks + 1
                }
            default : return state
    }

}
export default BookReducer;