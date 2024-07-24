import Layout from "../../shared/Layout"
import NavBar from "../../shared/NavBar"
import BannerText from "./components/BannerText"
import Benefits from "./components/Benefits"
import Features from "./components/Features"
import Footer from "./components/Footer"
import HowItWorks from "./components/HowItWorks"
import Recognitions from "./components/Recognitions"


function Home() {
  return (
    <Layout>
      <NavBar />
      <BannerText />
      <div className="w-full bg-blue-50 p-3">
        <p className="text-center">
          ¡Disfruta de la tranquilidad y comodidad mientras nosotros solucionamos cualquier falla de tu vehículo!
        </p>
      </div>
      <Recognitions />
      <Features />
      <Benefits />
      <HowItWorks />
      <Footer />
    </Layout>
  )
}

export default Home