import {CREATE_OFFER, START_OFFER_LOADING, END_OFFER_LOADING, FETCH_LOGGED_USER_INCOMING_OFFERS, FETCH_SPECIFIC_USER_INCOMING_OFFERS} from "../../utils/constants/actionTypes.js";

const initialState = {
    isLoading: false,
    activeUserOutgoingOffers: [],
    activeUserIncomingOffers: [],
    specificUserIncomingOffers: [],
};

const offersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGGED_USER_INCOMING_OFFERS:
            return {...state, activeUserIncomingOffers: action.payload.data};

        case CREATE_OFFER:
            return {...state, activeUserOutgoingOffers: [...state.activeUserOutgoingOffers, action.payload.data]};
        case START_OFFER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_SPECIFIC_USER_INCOMING_OFFERS:
            return {...state, specificUserIncomingOffers: action.payload.data}
        case END_OFFER_LOADING:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default offersReducer;