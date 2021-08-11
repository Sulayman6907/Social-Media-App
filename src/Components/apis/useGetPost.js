import { useState } from 'react';
import { authAxios } from '../Utility/addToken';

export const useGetPost = () => {
  const [postRes, setPostRes] = useState({
    success: false,
    loading: true,
    status: null,
    data: null,
    error: null
  })

  const getPost = async () => {
    try {
      const res = await authAxios.get("/api/posts");
      setPostRes({
        success: true,
        loading: false,
        status: res.status,
        data: res.data,
        error: null
      })
    } catch (error) {
      setPostRes({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: error.response.status
      })
      console.log(error)
    }
  }
  return [postRes, getPost]
}