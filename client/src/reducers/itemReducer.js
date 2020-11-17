import {FETCH_FITTING, FETCH_FURNITURE, FETCH_ITEMS, ADD_ITEM} from '../actions/types';

const initialState = {
    furniture: [],
    fitting: [],
    item: [],
    added_item:null
}

export default function(state = initialState, action) {
    switch(action.type) {
       case FETCH_FURNITURE:
           return{
               ...state,
               furniture: action.payload
           }
        
           case FETCH_FITTING:
            return{
                ...state,
                fitting: action.payload
            }

            case FETCH_ITEMS:
            return{
                ...state,
                item: action.payload
            }
            case ADD_ITEM:
            return{
                ...state,
                added_item: action.payload
            }

        default:
            return state;
    }
}