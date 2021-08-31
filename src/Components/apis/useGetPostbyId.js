import { useState } from "react";
import { authAxios } from "../Utility/addToken";

export const useGetPostbyId = () => {
  const [res, setRes] = useState({
    success: false,
    loading: true,
    status: null,
    data: null,
    error: null,
  });
  const getPostbyId = async (id) => {
    try {
      const res = await authAxios.get(`/api/posts/${id}`);
      setRes({
        success: true,
        loading: false,
        status: res.status,
        data: res.data,
        error: null,
      });
    } catch (error) {
      setRes({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: error.response.status,
      });
      console.log(error);
    }
  };
  return [res, getPostbyId];
};
