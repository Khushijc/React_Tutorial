import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import Headers from './Components/Header'
import DisplayCounter from './Components/Display-counter'
import Container from './Components/Container'
import Control from './Components/Controls'

function App() {

  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Headers></Headers>
          <div className="col-lg-6 mx-auto">
            <DisplayCounter></DisplayCounter>
            <Control />
          </div>
        </Container>
      </center>
    </>
  )
}

export default App
