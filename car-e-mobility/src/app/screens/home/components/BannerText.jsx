import { useState } from 'react'
import Mockup from '../../../../assets/images/mockup.png'
import { useNavigate } from 'react-router-dom'

function BannerText() {
  const navigate = useNavigate()
  const [serviceNumber, setServiceNumber] = useState('')

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-row md:flex-col lg:flex-row justify-center items-center relative h-full top-[-50px] max-w-screen overflow-hidden">
        <img src={Mockup} className='hidden md:block lg:hidden p-2 lg:absolute mb-[-150px] w-2/3 top-3' alt="mockup" />
        <div className="w-full lg:w-5/6">
          <div className="p-8 lg:w-4/6 lg:p-0 space-y-4 lg:space-y-12">
            <div className="text-center lg:text-left space-y-5">
              <p className="font-semibold text-5xl md:text-6xl lg:text-8xl">
                La manera más <span className="italic">rápida</span> y segura <br /> de <span className="text-blue-900">cuidar <span className="text-red-500">tu auto.</span></span>
              </p>
              <p className="text-2xl lg:text-3xl text-zinc-700">
                ¡Somos el primer taller mecánico 100% digital!
              </p>
            </div>
            <div className="flex flex-col space-y-8 w-full md:w-4/5 mx-auto lg:mx-0">
              <a 
              href='https://api.whatsapp.com/send?phone=5215525433929&text=Hola%20Car-e!%20'
              target='_blank'
              className="flex flex-row shadow-lg bg-green-400 hover:bg-green-500 duration-300 ease-in-out rounded-full lg:w-3/5 py-4 px-6 h-14 space-x-3 items-center justify-center">
                <i className="fa-brands fa-whatsapp text-3xl text-white"></i>
                <p className="text-white text-xl text-center lg:text-left font-medium">
                  Cotizar y agendar
                </p>
              </a>
              <div className="w-full lg:space-y-3 lg:w-4/5">
                <p className="ms-2 mb-1 font-medium text-center md:text-left">¿Ya tienes tu número de servicio?</p>
                <div className="flex flex-row bg-white shadow-lg rounded-full justify-between h-14 border border-zinc-50">
                  <button
                    onClick={() => navigate(`/services/${serviceNumber}`)}
                    type="button"
                    className="bg-red-500  hover:bg-red-800 duration-300 ease-in-out text-white rounded-full px-5 md:px-8 py-4 text-sm font-medium"
                  >
                    Buscar
                  </button>
                  <input
                    value={serviceNumber}
                    onChange={e => setServiceNumber(e.target.value)}
                    className="rounded-l-full md:pl-6 py-2 flex flex-1 border-none focus:outline-none focus:ring-0 focus:border-transparent bg-transparent"
                    placeholder="Ingresa tu número de servicio"
                    type="text" />
                </div>
              </div>
            </div>
          </div>

        </div>
        <img src={Mockup} className='hidden lg:block p-2 lg:absolute  lg:right-[-130px] w-2/3 top-3' alt="mockup" />
      </div>

    </div>
  )
}

export default BannerText