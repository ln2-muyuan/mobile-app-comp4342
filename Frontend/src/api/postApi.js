import { post,get } from "../utils/request"

const basicUrl = '/post'
export const createPost = async (email, title, text, image, location) => {
    console.log(image)
    return post(`${basicUrl}`, {email, title, text, image, location})
}

export const getPosts = async (email) => {
    if(email === null){
        return get(`${basicUrl}`)
    }
    return get(`${basicUrl}?email=${email}`)
}