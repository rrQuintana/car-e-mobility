import Layout from "../../shared/Layout"
import NavBar from "../../shared/NavBar"

function Home() {
  return (
    <Layout>
      <NavBar />
      <p className="bg-red-500">Hola mundo</p>
    </Layout>
  )
}

export default Home