import {
    FETCH_ALL
} from "../../utils/constants/actionTypes.js";

const initialState = {
    products: [],
    isLoading: false
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, products: action.payload.data };
        default:
            return state;
    }
}

export default productsReducer;