import * as api from "../../api/CategoryRequests.js";
import { FETCH_ALL_CATEGORY } from "../../utils/constants/actionTypes.js";
import { message } from "antd";

export const getAllCategories = () => async (dispatch) => {
  try {
    const { data } = await api.getAllCategories();
    dispatch({ type: FETCH_ALL_CATEGORY, payload: data });
  } catch (error) {
    message.error(error.response.data.message);
  }
};
