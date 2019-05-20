import {
    GET_TRAIN,
    GET_TRAINS,
    TRAIN_LOADING,
    CLEAR_CURRENT_TRAIN
} from '../action/types';

const initialState = {
    cart: null,
    carts: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TRAIN_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_TRAIN:
            return {
                ...state,
                cart: action.payload,
                loading: false
            };
        case GET_TRAINS:
            return {
                ...state,
                carts: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_TRAIN:
            return {
                ...state,
                cart: null
            };
        default:
            return state;
    }
}