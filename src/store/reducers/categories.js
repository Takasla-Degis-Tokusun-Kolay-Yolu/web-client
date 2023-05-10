import {END_CATEGORY_LOADING, FETCH_ALL_CATEGORY, START_CATEGORY_LOADING, GET_CATEGORY_W_PRODUCTS} from "../../utils/constants/actionTypes.js";

const initialState = {
  categories: [],
  specCategory: [],
  isLoading: false,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORY:
      return { ...state, categories: action.payload.data };
    case START_CATEGORY_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_CATEGORY_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case GET_CATEGORY_W_PRODUCTS:
      return {
        ...state,
        specCategory: action.payload.data,
      }
    default:
      return state;
  }
};

export default categoriesReducer;
