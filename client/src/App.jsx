import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import CreateMeeting from "./pages/CreateMeeting"
import Meeting from "./pages/Meeting"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meeting/create" element={<CreateMeeting />} />
        <Route path="/meeting/:code" element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
