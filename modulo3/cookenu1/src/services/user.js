import axios from "axios"
import {BASE_URL} from "../../constants/url"

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res)=> {
       localStorage.setItem("token", res.data.token)
       clear()
       goToRecipesList("Logout")
    })
    .cath((err)=>alert(err.response.data.message))
}

export const singUp = (body, clear, history) => {
    axios.post(`${BASE_URL}/user/singup`, body)
    .then((res)=> {
       localStorage.setItem("token", res.data.token)
       clear()
       goToRecipesList(history)
    })
    .cath((err)=>alert(err.response.data.message))
}