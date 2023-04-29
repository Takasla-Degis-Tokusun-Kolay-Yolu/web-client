import * as api from "../../api/ProductRequests.js";
import {
  FETCH_ALL_PRODUCT,
  START_LOADING,
  END_LOADING,
  CREATE_PRODUCT,
    FETCH_USER_PRODUCTS
} from "../../utils/constants/actionTypes.js";
import { message } from "antd";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getAllProducts();
    dispatch({ type: FETCH_ALL_PRODUCT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    message.error(error.response.data.message);
  }
};

export const createProduct = (formData) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createProduct(formData);
        console.log('from action',data);
        dispatch({ type: CREATE_PRODUCT, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        message.error(error.message);
    }
}

export const userProducts = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getUserProducts(id);
        dispatch({ type: FETCH_USER_PRODUCTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        message.error(error.message);
    }
};

