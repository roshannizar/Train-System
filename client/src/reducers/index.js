import { combineReducers } from 'redux';
import trainReducer from './trainReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    train: trainReducer,
    cart: cartReducer
});