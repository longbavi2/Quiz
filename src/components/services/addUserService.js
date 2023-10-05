import { get, post } from "../utils/request";

export const addUser = async (email) => {
    const path = `users?email=${email}`
    const respon = await get(path)
    return respon;
}
export const postUser = async (path, option) => {
    const respon = await post(path, option)
    return respon;
}