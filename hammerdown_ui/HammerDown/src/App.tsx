import { Outlet } from "react-router"
import Navbar from "./Components/Navbar/Navbar"

function App() {

  const personName = {
    fname: 'Vegeta',
    lname: 'Prince'
  }
  return (
    <>
      {window.location.pathname.toLowerCase() !== '/login' && window.location.pathname.toLowerCase() !== '/signup' && (
      <>
        <Navbar />
      </>
      )}
      <Outlet />
    </>
  )
}

export default App
