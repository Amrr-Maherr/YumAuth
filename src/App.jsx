import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import NotFound from "./Pages/NotFound/NotFound"
import Home from "./Pages/Home/Home"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
