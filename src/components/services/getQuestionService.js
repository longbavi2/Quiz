import { get } from "../utils/request"

export const getDataQuestionById = async(id)=>{
    const path = `questions/?topicId=${id}`
    const respon = await get(path)
    return respon;
}
export const getDataTopicById = async(id)=>{
    const path = `topics/?id=${id}`
    const respon = await get(path)
    return respon;
}