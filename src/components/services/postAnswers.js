import { post } from "../utils/request"

export const postAnswersService = async(options)=>{
    const respon = await post("answers",options)
    return respon;
}