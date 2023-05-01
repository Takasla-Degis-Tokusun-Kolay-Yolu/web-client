import * as api from "../../api/ProductRequests.js";
import {
  FETCH_ALL_PRODUCT,
  START_LOADING,
  END_LOADING,
  CREATE_PRODUCT,
    FETCH_USER_PRODUCTS,
    FETCH_ONE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
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

export const getOneProductById = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getOneProductById(id);
        dispatch({ type: FETCH_ONE_PRODUCT, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        message.error(error.message);
    }
};

export const updateProduct = (id, formData) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.updateProduct(id, formData);
        dispatch({ type: UPDATE_PRODUCT, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        message.error(error.message);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        await api.deleteProduct(id);
        dispatch({ type: DELETE_PRODUCT, payload: id });
        dispatch({ type: END_LOADING });
    } catch (error) {
        message.error(error.message);
    }
}

