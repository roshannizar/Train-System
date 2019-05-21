import axios from 'axios';

import { TRAIN_LOADING, GET_ERRORS } from './types';

export const addPayment = (paymentData) => dispatch => {
    dispatch(setTrainLoading());
    axios.post('/api/payments/addpayment', paymentData).then(res => console.log('Payment Made')).catch(err => dispatch ({
        type:GET_ERRORS,
        payload: err.response.data
    }));
};

export const setTrainLoading = () => {
    return {
        type: TRAIN_LOADING
    };
};

