import axios from "../utils/axios";

export const getListWard = () => {
    return axios.get("wards")
}

export const getWardById = (id) => {
    return axios.get("ward/" + id)
}

export const createWard = (data) => {
    return axios.post("wards", data)
}

export const updateWardById = (wardId, data) => {
    return axios.put("ward/" + wardId, data)
}

export const deleteWardById = (wardId) => {
    return axios.delete("ward/" + wardId)
}
