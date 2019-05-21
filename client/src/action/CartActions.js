import axios from 'axios';

import { TRAIN_LOADING, GET_TRAINS, GET_ERRORS } from './types';

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

export const deleteBooking = () => dispatch => {
    dispatch(setTrainLoading());
    axios.delete('/api/bookings/remove').then(res => console.log('Removed')).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};


export const setTrainLoading = () => {
    return {
        type: TRAIN_LOADING
    };
};