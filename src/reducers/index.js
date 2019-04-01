import {combineReducers} from 'redux';
import phones from './phones';
import phonesPage from './phonesPage';
import phonePage from './phonePage';
import cart from './cart'



export default combineReducers({
    phones,
    phonesPage,
    phonePage,
    cart
})