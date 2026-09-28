import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import CreatePost, { createPostAction } from './Component/CreatePost.jsx'
import PostList, { PostLoader } from './Component/PostList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <PostList />, loader:PostLoader },
      { path: '/create-post', element: <CreatePost />,action:createPostAction }
    ]

  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
