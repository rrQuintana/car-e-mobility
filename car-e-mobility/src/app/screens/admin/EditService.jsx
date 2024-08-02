import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../../shared/Layout"
import NavBar from "../../shared/NavBar"
import CarELogo from '../../../assets/images/logo-small.png'
import { Formik } from "formik"

function EditService() {
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
      {
        service.name && (
          <Formik
            initialValues={{
              name: service.name,
              description: service.description,
              user: service.user,
              marca: service.marca,
              modelo: service.modelo,
              anio: service.anio,
              version: service.version,
              placas: service.placas,
              servicio: service.servicio,
              noServicio: service.id,
              fechaYHoraRecogida: service.fechaYHoraRecogida && new Date(service.fechaYHoraRecogida).toISOString().slice(0, 16),
              fechaYHoraEntrega: service.fechaYHoraEntrega && new Date(service.fechaYHoraEntrega).toISOString().slice(0, 16),
              lugarRecogida: service.lugarRecogida,
              lugarEntrega: service.lugarEntrega
            }}
            onSubmit={async (values) => {
              const response = await fetch(`http://https://car-e-mobility.onrender.com//api/goods/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(values)
              })

              const data = await response.json()
              console.log(data)

              alert('Servicio actualizado correctamente')
              await fetchService()
            }}
          >
            {({
              values,
              setFieldValue,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-1 min-h-screen items-center space-y-12 mt-[-80px] px-12">

                <div className="flex w-80 mr-12">

                  <div className="space-y-3 bg-zinc-50 flex flex-col w-fit p-5 rounded-lg border border-zinc-50 shadow-md">
                    <div>
                      <h1 className='text-lg font-semibold'>Número de servicio:</h1>
                      <input
                        type="text"
                        name="noServicio"
                        value={values.noServicio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled
                        className="border border-zinc-300 rounded-md p-2 w-full"
                      />
                    </div>
                    <div>
                      <h1 className='text-lg font-semibold'>Nombre del usuario:</h1>
                      <input
                        type="text"
                        name="user"
                        value={values.user}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-zinc-300 rounded-md p-2 w-full"
                      />
                    </div>
                    <div>
                      <h1 className='text-lg font-semibold'>Datos del auto:</h1>
                      <div className="pl-5">
                        <p><span className="font-semibold">Marca:</span>
                          <input
                            type="text"
                            name="marca"
                            value={values.marca}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border border-zinc-300 rounded-md p-2"
                          />
                        </p>
                        <p><span className="font-semibold">Modelo:</span>
                          <input
                            type="text"
                            name="modelo"
                            value={values.modelo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border border-zinc-300 rounded-md p-2"
                          />
                        </p>
                        <p><span className="font-semibold">Año:</span>
                          <input
                            type="text"
                            name="anio"
                            value={values.anio}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border border-zinc-300 rounded-md p-2"
                          />
                        </p>
                        <p><span className="font-semibold">Versión:</span>
                          <input
                            type="text"
                            name="version"
                            value={values.version}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border border-zinc-300 rounded-md p-2"
                          />
                        </p>
                        <p><span className="font-semibold">Placas:</span>
                          <input
                            type="text"
                            name="placas"
                            value={values.placas}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="border border-zinc-300 rounded-md p-2"
                          />
                        </p>
                      </div>
                    </div>
                    <div>
                      <h1 className='text-lg font-semibold'>Servicio:</h1>
                      <input
                        type="text"
                        name="servicio"
                        value={values.servicio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-zinc-300 rounded-md p-2 w-full"
                      />
                    </div>
                    <div>
                      <h1 className='text-lg font-semibold'>Fecha y hora de recogida:</h1>
                      <input
                        type="datetime-local"
                        name="fechaYHoraRecogida"
                        value={values.fechaYHoraRecogida}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-zinc-300 rounded-md p-2 w-full"
                      />
                    </div>
                    <div>
                      <h1 className='text-lg font-semibold'>Fecha y hora de entrega:</h1>
                      <input
                        type="datetime-local"
                        name="fechaYHoraEntrega"
                        value={values.fechaYHoraEntrega}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-zinc-300 rounded-md p-2 w-full"
                      />
                    </div>
                    <div>
                      <h1 className='text-lg font-semibold'>Lugar de recogida:</h1>
                      <input
                        type="text"
                        name="lugarRecogida"
                        value={values.lugarRecogida}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-zinc-300 rounded-md p-2 w-full"
                      />
                    </div>
                    <div>
                      <h1 className='text-lg font-semibold'>Lugar de entrega:</h1>
                      <input
                        type="text"
                        name="lugarEntrega"
                        value={values.lugarEntrega}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-zinc-300 rounded-md p-2 w-full"
                      />
                    </div>
                    <button type="submit" className="bg-zinc-800 text-white px-3 py-2 rounded-md hover:bg-zinc-700">
                      Guardar
                    </button>
                  </div>
                </div>
                <div className="flex flex-row border-[5px] border-transparent w-3/5 mx-auto">
                  <div className={`h-6 w-6 aspect-square ${(service.estatus >= 0) ? 'bg-red-500' : 'bg-zinc-200'} rounded-full mt-[-10px] mr-[-20px] z-20 relative`}>
                    <input
                      type="radio"
                      name="estatus"
                      id="" className="z-30 absolute top-[5px] left-1" onChange={() => {
                        setFieldValue('estatus', 0)
                      }} />
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
                    <input
                      type="radio"
                      name="estatus" id=""
                      className="z-30 absolute top-[-5px]"
                      onChange={() => {
                        setFieldValue('estatus', 1)
                      }}
                    />
                  </div>
                  <div className={`h-6 w-6 aspect-square ${(service.estatus > 0 && service.estatus >= 2) ? 'bg-red-500' : 'bg-zinc-200'} rounded-full mt-[-10px] mr-[-20px] z-20`}>
                    <div className="mt-12 w-28 ml-[-45px] flex flex-col space-y-3 items-center justify-center">
                      <img src={CarELogo} alt="Car-E Logo" className={`w-24 mt-[-25px] mb-[-25px] ${(service.estatus > 0 && service.estatus >= 2) ? '' : 'grayscale'} `} />
                      <p className="text-sm text-center mt-[-50px]">Tu auto ingresó al punto Car-e</p>
                    </div>
                  </div>

                  <div className={`flex flex-1 h-1 ${(service.estatus > 0 && service.estatus >= 3) ? 'bg-red-500' : 'bg-zinc-200'} relative`}>
                    <input
                      type="radio"
                      name="estatus" id=""
                      className="z-30 absolute top-[-5px]"
                      onChange={() => {
                        setFieldValue('estatus', 2)
                      }}
                    />
                  </div>
                  <div className={`h-6 w-6 aspect-square ${(service.estatus > 0 && service.estatus >= 3) ? 'bg-red-500' : 'bg-zinc-200'} rounded-full mt-[-10px] mr-[-20px] z-20`}>
                    <div className="mt-12 w-28 ml-[-45px] flex flex-col space-y-3 items-center justify-center">
                      <i className={`fa-solid fa-circle-check text-center text-5xl ${(service.estatus > 0 && service.estatus >= 3) ? 'text-red-500' : 'text-zinc-500'}`}></i>
                      <p className="text-sm text-center">Tu auto está listo para entrega</p>
                    </div>
                  </div>

                  <div className={`flex flex-1 h-1 ${(service.estatus > 0 && service.estatus >= 4) ? 'bg-red-500' : 'bg-zinc-200'} relative`}>
                    <input
                      type="radio"
                      name="estatus" id="estatus"
                      className="z-30 absolute top-[-5px]"
                      onChange={() => {
                        setFieldValue('estatus', 3)
                      }}
                    />
                  </div>
                  <div className={`h-6 w-6 aspect-square ${(service.estatus > 0 && service.estatus >= 4) ? 'bg-red-500' : 'bg-zinc-200'} rounded-full mt-[-10px] mr-[-20px] z-20 relative`}>
                    <input
                      type="radio"
                      name="estatus"
                      id="" className="z-30 absolute top-[5px] left-1" onChange={() => {
                        setFieldValue('estatus', 4)
                      }} />
                    <div className="mt-12 w-28 ml-[-45px] flex flex-col space-y-3 items-center justify-center">
                      <i className={`fa-solid fa-house text-center text-5xl ${(service.estatus > 0 && service.estatus >= 4) ? 'text-red-500' : 'text-zinc-500'}`}></i>
                      <p className="text-sm text-center">Tu auto fue entregado</p>
                    </div>
                  </div>

                </div>
              </form>
            )}
          </Formik>
        )
      }

    </Layout>
  )
}

export default EditService