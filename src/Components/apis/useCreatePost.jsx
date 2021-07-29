import axios from "axios";

export const useCreatePost=()=>{
const addPost =  async (text) => {
    try {
      console.log("in add post with text ", text);
      const token = localStorage.getItem("token")
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        }
      };
      const res = await axios.post("/api/posts", { text: text }, config);
      console.log(res)
      return res
    } catch (err) {
        console.log(err)
      }
    };
    return [addPost]
}    