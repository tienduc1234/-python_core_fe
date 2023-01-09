import axios from "../utils/axios";



export const getListPlace = () => {
    return axios.get("places")
}

export const getPlaceById = (id) => {
    return axios.get("place/" + id)
}

export const createPlace = (data) => {
    return axios.post("places", data)
}

export const updatePlaceById = (placeId, data) => {
    return axios.put("place/" + placeId, data)
}

export const deletePlaceById = (placeId) => {
    return axios.delete("place/" + placeId)
}
