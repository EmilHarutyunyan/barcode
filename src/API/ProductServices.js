
import axiosApiInstance from "./interceptor";

export default class ProductServices {
    static async connectProduct (id, parentId) {
        return await axiosApiInstance.patch(`products/${id}`, {parent: parentId})
    }

    static async removeProduct (id) {
        return await axiosApiInstance.delete(`products/${id}`)
    }

    static async getById (id) {
        return await axiosApiInstance.get(`products/${id}`)
    }
    static async update(id ,data) {
        
        return await axiosApiInstance.patch(`products/${id}`, data)
    }

    static async getProductCompareParent(serialNumber) {
        return await axiosApiInstance.get(`products?serialNumber=${serialNumber}`)
    }

    static async compareProduct(parentId, childrenId) {
        return await axiosApiInstance.get(`products/${parentId}/${childrenId}`)
    }

    static async addUser(data) {
        return await axiosApiInstance.post(`users/`, data);
    }

    static async getUser() {
        return await axiosApiInstance.get(`users/`);
    }

}
