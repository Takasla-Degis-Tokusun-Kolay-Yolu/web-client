import * as api from "../../api/ProductRequests.js";
import {
    FETCH_ALL_PRODUCT, START_LOADING, END_LOADING
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