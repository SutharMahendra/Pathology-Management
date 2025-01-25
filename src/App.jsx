import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"
import { useEffect, useState } from "react"
import authService from "./Appwrite/auth"
import { useDispatch } from "react-redux"
import { login, logout } from "./Feature/AuthSlice"


function App() {

  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setIsLoading(false))
  }, [])


  return !isLoading ? (
    <>
      <Header />
      <main>

        <Outlet />
      </main>
      <Footer />

    </>
  )
    : (
      <div>
        loading ...
      </div>
    )
}

export default App
