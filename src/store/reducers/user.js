import { UPDATE } from "../../utils/constants/actionTypes.js";

const userReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case UPDATE:
            console.log(action?.data);
            return { ...state, data: action?.data };
        default:
            return state;
    }
};

export default userReducer;