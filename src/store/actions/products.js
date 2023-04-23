import * as api from "../../api/ProductRequests.js";
import {
    FETCH_ALL,
} from "../../utils/constants/actionTypes.js";
import { message } from "antd";

export const getAllProducts = () => async (dispatch) => {
    try {
        const { data } = await api.getAllProducts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        message.error(error.response.data.message);
    }
};