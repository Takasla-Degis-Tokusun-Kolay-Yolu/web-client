import {
  CREATE_PRODUCT,
  END_LOADING,
  FETCH_ALL_PRODUCT,
  START_LOADING,
  FETCH_USER_PRODUCTS,
  FETCH_ONE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from "../../utils/constants/actionTypes.js";

const initialState = {
  products: [],
  specProduct: {},
  specUserProducts: [],
  isLoading: true,
};

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
    case CREATE_PRODUCT:
        return { ...state, products: [...state.products, action.payload.data] };
    case DELETE_PRODUCT:
      return { ...state,
        specUserProducts: state.specUserProducts.filter((product) => product._id !== action.payload),
        };
    case UPDATE_PRODUCT:
      return { ...state,
        specUserProducts: state.specUserProducts.map((product) => product._id === action.payload.data._id ? action.payload.data : product)
      };
    case FETCH_ONE_PRODUCT:
        return { ...state, specProduct: action.payload.data };
    case FETCH_USER_PRODUCTS:
        return { ...state, specUserProducts: action.payload.data };
    default:
      return state;
  }
};

export default productsReducer;
