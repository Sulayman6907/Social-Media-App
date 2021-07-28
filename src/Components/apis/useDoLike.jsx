import axios from "axios";
import { useGetPost } from "./useGetPost";

export const useDoLike = () => {
    const [posts,setPosts]=useGetPost()
    const like = async (user, id) => {
        // console.log("liked");
        try {
            console.log("Like is running!")
            const token = localStorage.getItem("token")
            const res = await axios.put(`/api/posts/like/${id}`, {}, {
                headers: {
                    'x-auth-token': token,
                    'Content-Type': 'application/json',
                }
            });
            console.log(res.data);
            console.log(posts.findIndex(posts => posts._id === id))
            const index = posts.findIndex(posts => posts._id === id)
            // const tempPost={...posts[index],likes: [...posts[index].likes,res.data[0]]}
            const tempPosts = [...posts]
            tempPosts[index].likes.push(res.data[0])
            console.log(tempPosts)
            setPosts(tempPosts)
        } catch (err) {
            console.log(err)
        }
    };
    return [posts,like]
}
