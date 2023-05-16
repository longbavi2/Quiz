import { get } from "../utils/request"

export const getAnswersById = async(id)=>{
    const path = `answers?id=${id}`
    const respon = await get(path)
    return respon;
}
export const getTopics = async()=>{
    const respon = await get("topics")
    return respon;
}
