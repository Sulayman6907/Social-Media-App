import { useState } from "react";
import { authAxios } from "../Utility/addToken";

export const useLogin = () => {
  const [res, setRes] = useState({
    success: false,
    loading: false,
    status: null,
    data: null,
    error: null,
  });
  const login = async (user) => {
    try {
      setRes({
        success: true,
        loading: true,
        status: null,
        data: null,
        error: null,
      });
      const res = await authAxios.post("/api/auth", user);
      localStorage.setItem("token", res.data.token);
      setRes({
        success: true,
        loading: false,
        status: res.status,
        data: res.data.token,
        error: null,
      });
    } catch (err) {
      setRes({
        success: false,
        loading: false,
        status: null,
        data: null,
        error: err.response.status,
      });
      console.log(err);
    }
  };
  return [res, login];
};
