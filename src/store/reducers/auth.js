import {
  AUTH,
  LOGOUT,
  START_LOADING,
  END_LOADING,
  UPDATE_ACTIVE_USER,
  DELETE_USER,
  SET_SPECIFIC_USER
} from "../../utils/constants/actionTypes.js";

const initialState = {
  activeUser: null,
  isLoading: false,
  selectedUser: null,
};

const authReducer = (state = initialState, action) => {
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
    case AUTH:
      localStorage.setItem(
        "access_token",
        action?.payload.data?.tokens?.access_token
      );
      return { ...state, activeUser: action?.payload?.data };
    case SET_SPECIFIC_USER:
      return { ...state, selectedUser: action.payload.data };
    case UPDATE_ACTIVE_USER:
      return { ...state, activeUser: action.payload.data };
    case DELETE_USER:
      localStorage.clear();
      return { ...state, activeUser: null };
    case LOGOUT:
      localStorage.clear();
      return { ...state, activeUser: null };
    default:
      return state;
  }
};

export default authReducer;
