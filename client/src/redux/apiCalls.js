import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const loginCall = async (userCredential, dispatch) => {
    console.log(userCredential)
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/v1/login", {
            username: userCredential.username,
            password: userCredential.password,
        });
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure(error));
    }
}