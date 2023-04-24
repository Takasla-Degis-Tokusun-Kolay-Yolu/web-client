import {
    END_LOADING,
    FETCH_ALL_PRODUCT, START_LOADING
} from "../../utils/constants/actionTypes.js";

const initialState = {
    products: [],
    isLoading: true
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case END_LOADING:
            return {
                ...state,
                isLoading: false,
            };
        case FETCH_ALL_PRODUCT:
            return { ...state, products: action.payload.data };
        default:
            return state;
    }
}

export default productsReducer;