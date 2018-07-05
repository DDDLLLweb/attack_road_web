
import { API_XSRF, STATE_PRINCIPAL } from '../../action/app/';

const app = (state = {}, {type,payload}) => {
    switch (type) {
        case API_XSRF:
            return {
                ...state
            }
        case STATE_PRINCIPAL: 
            return {
                ...state,
                ...payload
            }
        default:
            return { ...state };
    }
};
export default app;