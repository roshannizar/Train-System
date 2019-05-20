import {
    GET_TRAIN,
    GET_TRAINS,
    TRAIN_LOADING,
    CLEAR_CURRENT_TRAIN
} from '../action/types';

const initialState = {
    train: null,
    trains: null,
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
                train: action.payload,
                loading: false
            };
        case GET_TRAINS:
            return {
                ...state,
                trains: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_TRAIN:
            return {
                ...state,
                train: null
            };
        default:
            return state;
    }
}