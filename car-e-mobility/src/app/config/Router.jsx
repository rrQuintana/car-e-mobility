import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../screens/home/Home"
import About from "../screens/about/About"
import Warranty from "../screens/warranty/Warranty"
import LoginPage from "../screens/login/LoginPage"
import AdminPage from "../screens/admin/AdminPage"
import AddService from "../screens/admin/AddService"
import Service from "../screens/service/Service"

function Router() {
  return (      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/services/:id" element={<Service />}  />
        <Route path="/login" element={<LoginPage />}  />
        <Route path="/admin" element={<AdminPage />}  />
        <Route path="/admin/add-service" element={<AddService />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/warranty" element={<Warranty />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default Router