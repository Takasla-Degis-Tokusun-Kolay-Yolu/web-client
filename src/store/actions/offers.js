import * as api from "../../api/OfferRequests.js";
import { CREATE_OFFER, START_OFFER_LOADING, END_OFFER_LOADING, FETCH_LOGGED_USER_INCOMING_OFFERS } from "../../utils/constants/actionTypes.js";
import {message} from "antd";


export const createOffer = (offerData) => async (dispatch) => {
    try {
        dispatch({ type: START_OFFER_LOADING });
        const { data } = await api.createOffer(offerData);
        dispatch({ type: CREATE_OFFER, payload: data });
        dispatch({ type: END_OFFER_LOADING });
    } catch (error) {
        message.error(error.message);
    }
};

export const getLoggedUserOffers = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_OFFER_LOADING });
        const { data } = await api.fetchActiveUserIncomingOffers(id);
        dispatch({ type: FETCH_LOGGED_USER_INCOMING_OFFERS, payload: data });
        dispatch({ type: END_OFFER_LOADING });
    } catch (error) {
        message.error(error.message);
    }
}