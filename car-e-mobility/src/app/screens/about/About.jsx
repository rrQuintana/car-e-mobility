import Layout from "../../shared/Layout"
import NavBar from "../../shared/NavBar"
import BannerText from "./components/BannerText"
import BannerImage from '../../../assets/images/banner.png'
import CariImage from '../../../assets/images/25.jpg'
import CarE from '../../../assets/images/logo-small.png'
import { Benefit } from "../home/components/Benefits"
import david_araiza from '../../../assets/images/team/david_araiza.jpg'
import diego_flores from '../../../assets/images/team/diego_flores.jpg'
import gustavo_vicencio from '../../../assets/images/team/gustavo_vicencio.jpg'
import itzel_hernandez from '../../../assets/images/team/itzel_hernandez.jpg'
import julian_sanchez from '../../../assets/images/team/julian_sanchez.jpg'
import miguel_vega from '../../../assets/images/team/miguel_vega.jpg'
import roberto_quintana from '../../../assets/images/team/roberto_quintana.png'
import zabdi_vasconcelos from '../../../assets/images/team/zabdi_vasconcelos.png'
import luis_montano from '../../../assets/images/team/luis_montano.jpg'
import vidania from '../../../assets/images/team/vidania.png'
import villagomez from '../../../assets/images/team/villagomez.png'
import Footer from "../home/components/Footer"

const Card = ({ image, title, description }) => {
  return (
    <div className="flex flex-row items-center bg-blue-950 h-16 w-[350px] justify-between rounded-full pe-3 m-7 shadow-lg">
      <img src={image} alt='Team member' className='rounded-full w-24 h-24 object-contain bg-white shadow-lg' />
      <div className="flex flex-1 flex-col my-auto">
        <h3 className='text-xl font-semibold text-white text-center'>{title}</h3>
        <p className='text-white italic font-extralight text-center mt-[-3px]'>{description}</p>
      </div>
    </div>
  )
}

function About() {
  return (
    <Layout>
      <NavBar />
      <BannerText />
      <div className="w-full bg-blue-50 p-3">
        <p className="text-center">
          ¡Disfruta de la tranquilidad y comodidad mientras nosotros solucionamos cualquier falla de tu vehículo!
        </p>
      </div>
      <div className='min-h-screen flex flex-col justify-center items-center px-14 py-10 mt-12 space-y-14 md:space-y-12'>
        <div className="w-2/3 md:w-5/6 lg:w-2/3 flex flex-col justify-center items-center">
          <h2 className="font-bold text-4xl md:text-5xl text-center">
            Nuestras <br /> motivaciones
          </h2>
        </div>

        <div className="w-full flex flex-row lg:space-x-12 md:pb-0">
          <div className="hidden lg:flex lg:flex-1">
            <img src='https://images.unsplash.com/photo-1521136095380-08fbd7be93c8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Car" className="rounded-lg shadow-zinc-700/10 shadow-lg overflow-hidden h-full aspect-square object-cover origin-center" />
          </div>
          <div className="flex flex-1 flex-col space-y-12 text-center md:text-left pb-12 my-auto">
            <p className="text-center text-8xl"> ❤️ </p>
            <div className="space-y-5">
              <h1 className="hidden md:block font-semibold text-5xl">
                Buscamos mejorar la manera en la que cuidas de tu auto
              </h1>
              <p className='text-lg'>Por medio de servicios, productos y una experiencia
                totalmente diferente.</p>
              <p className='text-lg'>Somos el primer taller mecánico 100%
                digital enfocado en apoyar a los conductores con poco o
                nulo conocimiento en mecánica automotriz.</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row lg:space-x-12 md:pb-0">
          <div className="flex flex-1 flex-col space-y-12 text-center md:text-left pb-12 my-auto">
            <p className="text-center text-8xl"> 🌱 </p>
            <div className="space-y-5">
              <h1 className="hidden md:block font-semibold text-5xl">
                Impulsamos la economía circular en la industria automotriz
              </h1>
              <p className='text-lg'>Somos factor clave en la recolección de piezas,
                materiales y residuos generados por los automóviles.</p>
              <p>¡Así lograremos fabricar automóviles nuevos hechos
                con un mayor porcentaje de materiales reciclados!</p>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1">
            <img src='https://images.unsplash.com/photo-1531850959096-cfbb6f26c5a8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Car" className="rounded-lg shadow-zinc-700/10 shadow-lg overflow-hidden h-full aspect-square object-cover origin-center" />
          </div>
        </div>

        <div className="w-full flex flex-row lg:space-x-12 pb-20 lg:pb-0">
          <div className="hidden lg:flex lg:flex-1">
            <img src={CariImage} alt="Car" className="rounded-t-lg shadow-zinc-700/10 shadow-lg overflow-hidden h-full aspect-square object-cover origin-center" />
          </div>
          <div className="flex flex-1 flex-col space-y-10 my-auto text-center md:text-left">
            <div className="space-y-3 md:space-y-5 lg:space-y-3">
              <h1 className="hidden md:block font-semibold text-5xl">
                ¿Cómo lo hacemos?
              </h1>
            </div>

            <div className="flex flex-col space-y-14">
              <Benefit title="Innovación" description="Car-e es la única app que te conecta con mecánicos especializados para brindarte una solución más eficiente." />
              <Benefit title="Eficiencia" description="¡Perder tiempo es cosa del pasado! Solo tienes que agendar y nosotros llevaremos tu auto al taller, ¡Dale seguimiento desde la app!" />
              <Benefit title="Calidad" description="Contamos con t
              odos los requerimientos necesarios para avalar nuestra calidad y garantía, ¡Tranquilo, tu auto, está en manos de expertos!" />
              <Benefit title="Impacto" description="Gracias a un enfoque sostenible impulsamos el trabajo decente, igualdad de género y economía circular." />
            </div>
          </div>
        </div>
      </div>

      <div className='min-h-screen bg-blue-50 flex flex-col justify-center items-center md:px-14 py-20 space-y-12'>
        <h2 className="font-bold text-4xl md:text-5xl text-center">
          Nuestro equipo
        </h2>

        <p className="w-4/5 text-center text-zinc-700 text-2xl font-light">
          Somos un equipo de jóvenes apasionados por la innovación y la industria automotriz, detectamos que había mucho por mejorar en el
          sector de reparación y mantenimiento automotriz, así que decidimos ser parte del cambio.
        </p>

        <div className="w-full flex flex-row pb-20 flex-wrap justify-center">
          <Card image={zabdi_vasconcelos} title='Zabdi Vasconcelos' description='CEO & Co-founder' />
          <Card image={luis_montano} title='Luis Montaño' description='CGO & Co-founder' />
          <Card image={julian_sanchez} title='Julian Sánchez' description='Operaciones' />
          <Card image={david_araiza} title='David Araiza' description='Operaciones' />
          <Card image={vidania} title='Ángel Vidaña' description='Operaciones' />
          <Card image={gustavo_vicencio} title='Gustavo Vicencio' description='Finanzas' />
          <Card image={miguel_vega} title='Miguel Vega' description='Inversiones' />
          <Card image={roberto_quintana} title='Roberto Quintana' description='Tech' />
          <Card image={diego_flores} title='Diego Flores' description='Tech' />
          <Card image={itzel_hernandez} title='Itzel Hernández' description='RRHH' />
          <Card image={villagomez} title='Abel Villagomez' description='Inteligencia de mercado' />


        </div>
      </div>
      <div className='min-h-screen flex flex-col justify-center items-center px-4 md:px-14 py-20 space-y-12'>
        <img src={CarE} alt='Car-e Logo' className='md:h-1/3 mb-[-80px]' />
        <h2 className="font-bold text-4xl md:text-5xl text-center">
          El primer taller mecánico <br /> 100% digital en México
        </h2>
        <p className="w-4/5 text-center text-zinc-700 text-2xl font-light">
          A través de nuestra app, los usuarios podrán cotizar, solicitar y gestionar todos los servicios de mantenimiento y reparación que su auto requiera en el momento y lugar de su preferencia.  <br /> <br />
          Gracias a nuestro servicio de recolección y entrega, así como al monitoreo del estado del auto en tiempo real, los usuarios dejarán de perder tiempo y dinero al llevar su auto a un taller mecánico convencional.
        </p>
      </div>
      <Footer />
    </Layout>
  )
}

export default About