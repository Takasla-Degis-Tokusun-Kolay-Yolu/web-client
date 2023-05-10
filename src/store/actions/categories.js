import * as api from "../../api/CategoryRequests.js";
import { FETCH_ALL_CATEGORY, START_CATEGORY_LOADING, END_CATEGORY_LOADING, GET_CATEGORY_W_PRODUCTS } from "../../utils/constants/actionTypes.js";
import { message } from "antd";

export const getAllCategories = () => async (dispatch) => {
  try {
    const { data } = await api.getAllCategories();
    dispatch({ type: FETCH_ALL_CATEGORY, payload: data });
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const getCategoryById = (categoryId) => async (dispatch) => {
    try {
      dispatch({ type: START_CATEGORY_LOADING });
      const { data } = await api.getCategoryById(categoryId);
      dispatch({ type: GET_CATEGORY_W_PRODUCTS, payload: data });
      dispatch({ type: END_CATEGORY_LOADING });
    } catch (error) {
        message.error(error.response.data.message);
    }
};