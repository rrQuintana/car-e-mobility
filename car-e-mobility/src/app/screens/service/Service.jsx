import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../../shared/Layout"
import NavBar from "../../shared/NavBar"
import CarELogo from '../../../assets/images/logo-small.png'

function Service() {
  const { id } = useParams()

  const [service, setService] = useState({})

  const fetchService = async () => {
    const response = await fetch(`http://https://car-e-mobility.onrender.com//api/goods/${id}`)
    const data = await response.json()
    setService(data)
  }

  useEffect(() => {
    fetchService()
  }, [])

  return (
    <Layout>
      <NavBar />
      <h1 className="text-2xl font-semibold text-center mt-12">Servicio {id}</h1>
      <div className="flex flex-1 min-h-screen items-center space-y-12 mt-[-80px] px-12">
        <div className="flex w-80 mr-12">
          {
            service.name && (
              <div className="space-y-3 bg-zinc-50 flex flex-col w-fit p-5 rounded-lg border border-zinc-50 shadow-md">
                <div>
                  <h1 className='text-lg font-semibold'>Nombre del usuario:</h1>
                  <p>{service.user}</p>
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>Datos del auto:</h1>
                  <div className="pl-5">
                    <p><span className="font-semibold">Marca:</span> {service.marca}</p>
                    <p><span className="font-semibold">Modelo:</span> {service.modelo}</p>
                    <p><span className="font-semibold">Año:</span> {service.anio}</p>
                    <p><span className="font-semibold">Versión:</span> {service.version}</p>
                    <p><span className="font-semibold">Placas:</span> {service.placas}</p>
                  </div>
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>Servicio:</h1>
                  <p>{service.servicio}</p>
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>Número de servicio:</h1>
                  <p>{service.id}</p>
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>Fecha y hora de recogida:</h1>
                  <p>{service.fechaYHoraRecogida !== '' ? new Date(service.fechaYHoraRecogida).toLocaleString() : 'Aún sin asignar'}</p>
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>Fecha y hora de entrega:</h1>
                  <p>{service.fechaYHoraEntrega !== '' ? new Date(service.fechaYHoraEntrega).toLocaleString() : 'Aún sin asignar'}</p>
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>Lugar de recogida:</h1>
                  <p>{service.lugarRecogida !== '' ? service.lugarRecogida : 'Aún sin asignar'}</p>
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>Lugar de entrega:</h1>
                  <p>{service.lugarEntrega !== '' ? service.lugarEntrega : 'Aún sin asignar'}</p>
                </div>
              </div>
            )
          }
        </div>
        <div className="flex flex-row border-[5px] border-transparent w-3/5 mx-auto">
                  <div className="h-6 w-6 aspect-square bg-red-500 rounded-full mt-[-10px] ml-[-20px] z-20">
                    <div className="mt-12 w-28 ml-[-45px] flex flex-col space-y-3 items-center justify-center">
                      <i className="fa-regular fa-clock text-center text-5xl text-red-500"></i>
                      <p className="text-sm text-center">Tu servicio fue asignado</p>
                    </div>
                  </div>
                  <div className={`flex flex-1 h-1 ${(service.estatus > 0 && service.estatus >= 1) ? 'bg-red-500' : 'bg-zinc-200'}`}></div>
                  <div className={`h-6 w-6 aspect-square ${(service.estatus > 0 && service.estatus >= 1) ? 'bg-red-500' : 'bg-zinc-200'} rounded-full mt-[-10px] mr-[-20px] z-20`}>
                    <div className="mt-12 w-28 ml-[-45px] flex flex-col space-y-3 items-center justify-center">
                      <i className={`fa-solid fa-car-rear text-center text-5xl ${(service.estatus > 0 && service.estatus >= 1) ? 'text-red-500' : 'text-zinc-500'}`}></i>
                      <p className="text-sm text-center">Tu auto fue recolectado</p>
                    </div>
                  </div>

                  <div className={`flex flex-1 h-1 ${(service.estatus > 0 && service.estatus >= 2) ? 'bg-red-500' : 'bg-zinc-200'} relative`}>
                  </div>
                  <div className={`h-6 w-6 aspect-square ${(service.estatus > 0 && service.estatus >= 2) ? 'bg-red-500' : 'bg-zinc-200'} rounded-full mt-[-10px] mr-[-20px] z-20`}>
                    <div className="mt-12 w-28 ml-[-45px] flex flex-col space-y-3 items-center justify-center">
                      <img src={CarELogo} alt="Car-E Logo" className={`w-24 mt-[-25px] mb-[-25px] ${(service.estatus > 0 && service.estatus >= 2) ? '' : 'grayscale'} `} />
                      <p className="text-sm text-center mt-[-50px]">Tu auto ingresó al punto Car-e</p>
                    </div>
                  </div>

                  <div className={`flex flex-1 h-1 ${(service.estatus > 0 && service.estatus >= 3) ? 'bg-red-500' : 'bg-zinc-200'} relative`}>
                  </div>
                  <div className={`h-6 w-6 aspect-square ${(service.estatus > 0 && service.estatus >= 3) ? 'bg-red-500' : 'bg-zinc-200'} rounded-full mt-[-10px] mr-[-20px] z-20`}>
                    <div className="mt-12 w-28 ml-[-45px] flex flex-col space-y-3 items-center justify-center">
                    <i className={`fa-solid fa-circle-check text-center text-5xl ${(service.estatus > 0 && service.estatus >= 3) ? 'text-red-500' : 'text-zinc-500'}`}></i>
                    <p className="text-sm text-center">Tu auto está listo para entrega</p>
                    </div>
                  </div>

                  <div className={`flex flex-1 h-1 ${(service.estatus > 0 && service.estatus >= 4) ? 'bg-red-500' : 'bg-zinc-200'} relative`}>
                  </div>
                  <div className={`h-6 w-6 aspect-square ${(service.estatus > 0 && service.estatus >=4) ? 'bg-red-500' : 'bg-zinc-200'} rounded-full mt-[-10px] mr-[-20px] z-20 relative`}>
                    <div className="mt-12 w-28 ml-[-45px] flex flex-col space-y-3 items-center justify-center">
                    <i className={`fa-solid fa-house text-center text-5xl ${(service.estatus > 0 && service.estatus >=4) ? 'text-red-500' : 'text-zinc-500'}`}></i>
                      <p className="text-sm text-center">Tu auto fue entregado</p>
                    </div>
                  </div>

                </div>
      </div>
    </Layout>
  )
}

export default Service