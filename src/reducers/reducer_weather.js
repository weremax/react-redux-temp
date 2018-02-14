import { FETCH_WEATHER } from '../actions/index';

export default function(state = [] , action) {
    // console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
        console.log(action.payload.data);
            return [ action.payload.data, ...state ];
    }
    return state;
}