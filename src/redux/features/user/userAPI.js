
import axiosApiInstance from "../../../API/interceptor";
export async function  login  (data) {
    return await axiosApiInstance.post(`auth/login`, data);
}