import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Component/Header'
import Footer from './Component/Footer'
import Sidebar from './Component/Sidebar'
import { useState } from 'react'
import PostListProvider from "./Store/post-list-store"
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <PostListProvider>
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className='content'>
        <Header></Header>
        {/* {selectedTab === "Home"
          ? (<PostList></PostList>)
          : (<CreatePost></CreatePost>)} */}
          <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  
  )
}

export default App
