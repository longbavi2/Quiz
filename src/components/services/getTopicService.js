import { get } from "../utils/request"

export const getDataTopic=async()=>{
    const respon = await get("topics")
    return respon;
}