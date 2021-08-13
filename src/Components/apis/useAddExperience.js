import { authAxios } from '../Utility/addToken';
import { useState } from "react";

export const useAddExperience = () => {
  const [res, setRes] = useState({
    success: false,
    loading: false,
    status: null,
    data: null,
    error: null
  })
  const addExperience = async (formData) => {
    try {
      setRes({
        success: false,
        loading: true,
        status: null,
        data: null,
        error: null
      })
      const res = await authAxios.put("/api/profile/experience", formData)
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
  return [res, addExperience]
}