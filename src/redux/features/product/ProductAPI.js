
import axiosApiInstance from "../../../API/interceptor";

export async function  product  (data) {
    return await axiosApiInstance.post(`products`, data);
}

export async function getProductAll (query) {
    return await axiosApiInstance.get(`products?page=${query.page}&limit=${query.limit}`)
}

export async function getProductByID (serialNumber) {
    return await axiosApiInstance.get(`products?serialNumber=${serialNumber}`)
}
export async function getProductPage (query) {
    return await axiosApiInstance.get(`products?limit=${query.limit}`)
}