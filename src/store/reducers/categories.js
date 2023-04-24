import {
    FETCH_ALL_CATEGORY
} from "../../utils/constants/actionTypes.js";

const initialState = {
    categories: [],
    isLoading: false
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_CATEGORY:
            return { ...state, categories: action.payload.data };
        default:
            return state;
    }
}

export default categoriesReducer;