import {createStore} from 'redux'
import BookReducer from './Reducers'

export const store = createStore ( BookReducer );