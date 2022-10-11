import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"
import NewTicket from "./pages/NewTicket"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/new-ticket"
              element={
                <PrivateRoute>
                  <NewTicket />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
