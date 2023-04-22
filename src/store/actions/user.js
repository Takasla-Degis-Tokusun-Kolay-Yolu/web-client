import * as api from "../../api/UserRequests.js";
import { UPDATE} from "../../utils/constants/actionTypes.js";
import { message } from "antd";

export const updateUser = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(formData);
        console.log(data)
        dispatch({ type: UPDATE, data });
        setTimeout(() => {
            console.log("Routing");
            navigate("/feed");
            // TODO: Fix this, it is just a temporary fix
            //window.location.reload();
        }, 1000);
        message.success(
            "Profil başarıyla güncellendi! Anasayfaya yönlendiriliyorsunuz..."
        );
    } catch (error) {
        message.error(error.response.data.message);
    }
};