import * as api from "../../api/UserRequests.js";
import { AUTH } from "../../utils/constants/actionTypes.js";
import { message } from "antd";
// Action creators: functions that return actions
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    setTimeout(() => {
      console.log('Routing')
      navigate('/feed')
      // TODO: Fix this, it is just a temporary fix
      window.location.reload();
    }, 1000);
    message.success(
      "You have successfully logged in! Redirecting to home page..."
    );
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    setTimeout(() => {
      history("/feed");
    }, 1000);
    message.success(
      "You have successfully signed in! Redirecting to home page..."
    );
  } catch (error) {
    message.error(error.response.data.message);
  }
};
