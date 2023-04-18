import { AUTH, LOGOUT } from "../../utils/constants/actionTypes.js";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem(
        "access_token",
        action?.data.data?.tokens?.access_token
      );
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
