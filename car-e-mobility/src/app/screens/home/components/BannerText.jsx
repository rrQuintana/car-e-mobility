import { useState } from 'react'
import Mockup from '../../../../assets/images/mockup.png'
import { useNavigate } from 'react-router-dom'

function BannerText() {
  const navigate = useNavigate()
  const [serviceNumber, setServiceNumber] = useState('')

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-center items-center relative h-full top-[-50px] max-w-screen overflow-hidden">
        <div className="w-5/6">
          <div className="w-4/6 space-y-12">
            <div className="space-y-5">
              <p className="font-semibold text-5xl md:text-6xl lg:text-8xl">
                La manera más <span className="italic">rápida</span> y segura <br /> de <span className="text-blue-900">cuidar <span className="text-red-500">tu auto.</span></span>
              </p>
              <p className="text-3xl text-zinc-700">
                ¡Somos el primer taller mecánico 100% digital!
              </p>
            </div>
            <div className="flex flex-col space-y-8 w-4/5">
            <button className="flex flex-row shadow-lg bg-green-400 hover:bg-green-500 duration-300 ease-in-out rounded-full w-3/5 py-4 px-6 h-14 space-x-3 items-center justify-center">
                <i className="fa-brands fa-whatsapp text-3xl text-white"></i>
                <p className="text-white text-xl text-left font-medium">
                  Cotizar y agendar un servicio
                </p>
              </button>
              <div className="space-y-3 w-4/5">
                <p className="ms-2 mb-1">
                  <span className="font-medium">¿Ya tienes tu número de servicio?</span>
                </p>
                <div className="flex flex-row bg-white shadow-lg rounded-full justify-between h-14 border border-zinc-50">
                  <button
                    onClick={() => navigate(`/services/${serviceNumber}`)}
                    type="button"
                    className="bg-red-500  hover:bg-red-800 duration-300 ease-in-out text-white rounded-full px-8 py-4 text-sm font-medium"
                  >
                    Buscar
                  </button>
                  <input
                    value={serviceNumber}
                    onChange={e => setServiceNumber(e.target.value)}
                    className="rounded-l-full pl-6 py-2 flex flex-1 border-none focus:outline-none focus:ring-0 focus:border-transparent bg-transparent"
                    placeholder="Ingresa tu número de servicio"
                    type="text" />
                </div>
              </div>
            </div>
          </div>

        </div>
        <img src={Mockup} className='p-2 absolute right-[-130px] w-2/3 top-3' alt="mockup" />
      </div>

    </div>
  )
}

export default BannerText