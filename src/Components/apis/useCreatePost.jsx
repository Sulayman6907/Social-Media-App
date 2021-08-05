import axios from "axios";
import { useState } from "react";

export const useCreatePost = () => {
  const [res, setRes] = useState({
    success: false,
    loading: false,
    status: null,
    data: null,
    error: null
  })
  const addPost = async (text) => {
    try {
      setRes({
        success: false,
        loading: true,
        status: null,
        data: null,
        error: null
      })
      const token = localStorage.getItem("token")
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        }
      };
      const res = await axios.post("/api/posts", { text: text }, config);
      setRes({
        success: true,
        loading: false,
        status: res.status,
        data: res.data,
        error: null
      })
    } catch (err) {
      console.log(err)
      setRes({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: err.response.status
      })
    }
  };
  return [res, addPost]
}