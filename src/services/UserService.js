import { http } from "../utils/baseUrl";

export const CallApiLogin = userData => http.post('Users/signin', userData)
export const CallApiRegister = userData => http.post('Users/signup', userData)
