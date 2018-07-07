
import { networkUtils } from '../../../utils';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const API_XSRF = 'API_XSRF';
export const API_PRINCIPAL = 'API_PRINCIPAL';
export const API_LOGINOUT = 'API_LOGINOUT';

export const STATE_PRINCIPAL = 'STATE_PRINCIPAL';
export const DO_LOGIN = 'DO_LOGIN';

// action creater
export const receiveData = (data, category) => ({
    type: RECEIVE_DATA,
    data,
    category
});

export const queryXsrf = (dispatch) => {
    // networkUtils.csrf().then(() => {
       dispatch ({
        type: API_PRINCIPAL,
        })
    // });
}
