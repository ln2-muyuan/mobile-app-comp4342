import { post } from "../utils/request"

const basicUrl = '/user'
export const register = async (username,password,email) => {
    return post(`${basicUrl}/register`, {username,password,email})
}

export const login = async (email, password) => {
    return post(`${basicUrl}/login`, {email,password})
}

export const logout = () => {

}

//get user information {username, nickname}
export const getUserInfo = () => {

}