import axios from "axios";

const token = localStorage.getItem("token")

export const authAxios = axios.create({
    headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
    }
})