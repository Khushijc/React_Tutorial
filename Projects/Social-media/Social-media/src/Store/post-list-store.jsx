import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList
  if (action.type === 'DELETE_POST') {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
  }
  else if (action.type === "ADD_INITIAL_POSTs") {
    newPostList = action.payload.posts
  }
  else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList]

  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: post
    })
  };
  const addInitialPost = (posts) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POSTs',
      payload: {
        posts
      }
    })
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId
      }
    })
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

// const DEFAULT_POST_LIST = [{
//   id: '1',
//   title: 'Fisrt-job',
//   body: 'Fristine Infotech it is ! really happy to join this company.',
//   reactions: '20',
//   userId: 'user-1',
//   tags: ['fisrt-job', 'fristine', 'pune', 'fortunate']
// }]

export default PostListProvider;