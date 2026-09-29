import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer.jsx"
import Headers from "../Components/Header.jsx"
import FetchItems from "../Components/fetchItems.jsx"
import { useSelector } from "react-redux"
import LoadingSpinner from "../Components/LoadingSpinner.jsx"

function App() {
  
  const fetchStatus = useSelector((store)=>store.fetchStatus)
  return (
    <>
      <Headers/>
      <FetchItems/>
      {fetchStatus.CurrentlyFetching ? <LoadingSpinner/> :  <Outlet/> }
      <Footer/>
    </>
  )
}

export default App
