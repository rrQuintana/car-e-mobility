import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../screens/home/Home"
import About from "../screens/about/About"
import Warranty from "../screens/warranty/Warranty"

function Router() {
  return (      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/warranty" element={<Warranty />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default Router