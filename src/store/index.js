import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import headerReducer from './reducer/header'
const store=createStore(headerReducer,applyMiddleware(thunk))
export default store