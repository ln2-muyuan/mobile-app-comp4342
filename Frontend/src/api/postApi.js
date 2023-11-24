import { post,get } from "../utils/request"

const basicUrl = '/post'
export const createPost = async (email, title, text, image, location) => {
    console.log(image)
    return post(`${basicUrl}`, {email, title, text, image, location})
}