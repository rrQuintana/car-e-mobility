import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../screens/home/Home"
import About from "../screens/about/About"
import Warranty from "../screens/warranty/Warranty"
import LoginPage from "../screens/login/LoginPage"
import AdminPage from "../screens/admin/AdminPage"
import AddService from "../screens/admin/AddService"
import Service from "../screens/service/Service"
import EditService from "../screens/admin/EditService"
import PrivacyPolicy from "../screens/home/PrivacyPolicy"

function Router() {
  return (      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/aviso-privacidad" element={<PrivacyPolicy />}  />
        <Route path="/services/:id" element={<Service />}  />
        <Route path="/login" element={<LoginPage />}  />
        {localStorage.getItem('token') && <Route path="/admin" element={<AdminPage />}  /> }
        {localStorage.getItem('token') && <Route path="/admin/add-service" element={<AddService />}  /> }
        {localStorage.getItem('token') && <Route path="/admin/edit-service/:id" element={<EditService />}  /> }
        <Route path="/about" element={<About />}  />
        <Route path="/warranty" element={<Warranty />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default Router