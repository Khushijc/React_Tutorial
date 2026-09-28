import Post from "./Post"
import WelcomMSG from "./WelcomeMSG"
import { useLoaderData } from "react-router-dom"

const PostList = () => {
  const postList = useLoaderData()


  return <>
    {postList.length === 0 && <WelcomMSG />}
    {postList.map((post) =>
    (<Post key={post.id} post={post} />
    ))}
  </>
}

export const PostLoader = () => {
  return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      return data.posts
    });

}

export default PostList