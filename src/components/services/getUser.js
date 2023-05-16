import { get } from "../utils/request"

export const getDataUserLogin = async(email,password)=>{
    const path = `users?email=${email}&&password=${password}`
    const respon = await get(path)
    return respon;
}