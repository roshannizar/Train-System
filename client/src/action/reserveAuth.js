import axios from 'axios';

import { GET_ERRORS } from './types';

export const reserve = (reserveData) => dispatch => {
    axios.post('/api/bookings/reserve', reserveData).then(res => console.log('Reserved')).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};