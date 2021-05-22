import {FETCH_PERSON_SUCCEEDED, FETCH_PERSON_FAILED} from './actions'


const intialState = {
    items: [],
    // error: null
}

export const peopleReducer = (state = intialState, {type, payload}) => {
    switch(type) {
        case FETCH_PERSON_SUCCEEDED:
            return {...state, items: [...state.items, payload], error: null}
            case FETCH_PERSON_FAILED:
        return {...state, items: [], error: payload}
            default: return state
    }
}