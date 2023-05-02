import * as api from "../../api/UserRequests.js";
import {
  AUTH,
  UPDATE_ACTIVE_USER,
  START_LOADING,
  END_LOADING,
  DELETE_USER,
  SET_SPECIFIC_USER
} from "../../utils/constants/actionTypes.js";
import { message } from "antd";
// Action creators: functions that return actions
export const signin = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    message.success("You have successfully logged in!");
    dispatch({ type: END_LOADING });
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, payload: data });
    message.success("You have successfully signed in!");
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const updateUser = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateUser(formData);
    dispatch({ type: UPDATE_ACTIVE_USER, payload: data });
    message.success("Your profile has been updated!");
    dispatch({ type: END_LOADING });
  } catch (e) {
    message.error(e.response.data.message);
  }
};

export const deleteUser = (userId, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.deleteUser(userId);
    dispatch({ type: DELETE_USER, payload: data });
    navigate("/");
    message.success("Your profile has been deleted!");
    dispatch({ type: END_LOADING });
  } catch (e) {
    message.error(e.response.data.message);
  }
};

export const getUserById = (userId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getUserById(userId);
    dispatch({ type: SET_SPECIFIC_USER, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    message.error(e.response.data.message);
  }
};
