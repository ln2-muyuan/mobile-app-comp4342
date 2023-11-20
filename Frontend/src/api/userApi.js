import { post,get } from "../utils/request"

const basicUrl = '/user'
export const register = async (name,password,email) => {
    return post(`${basicUrl}/register`, {name,password,email})
}

export const login = async (email, password) => {
    return post(`${basicUrl}/login`, {email,password})
}

export const logout = () => {

}

//get user information user:{email,name,avatar}
export const getUserInfo = async (email) => {
    return get(`${basicUrl}/info?email=${email}`)
}

export const updateUserInfo = async (email,avatar) => {
    return post(`${basicUrl}/update`, {email,avatar})
}