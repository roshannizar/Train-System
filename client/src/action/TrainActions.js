import axios from 'axios';

import { TRAIN_LOADING, GET_TRAINS } from './types';

export const getTrains = () => dispatch => {
    dispatch(setTrainLoading());
    axios.get('/api/trains/gettrain').then(res => dispatch({
        type: GET_TRAINS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: GET_TRAINS,
        payload: null
    }));
};

export const getBookings = () => dispatch => {
    dispatch(setTrainLoading());
    axios.get('/api/bookings/getbooking').then(res => dispatch({
        type: GET_TRAINS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: GET_TRAINS,
        payload: null
    }));
};


export const setTrainLoading = () => {
    return {
        type: TRAIN_LOADING
    };
};