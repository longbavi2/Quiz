import { get } from "../utils/request"

export const dataAnswersService = async(id_user,id_topic)=>{
    const path = `answers?userId=${id_user}`
    const respon = await get(path)
    return respon;
}