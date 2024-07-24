import { useState } from "react"
import Layout from "../../shared/Layout"
import NavBar from "./NavBar"
import { useNavigate } from "react-router-dom"

function AddService() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    description: '',
    user: '',
    marca: '',
    modelo: '',
    anio: '',
    version: '',
    placas: '',
    servicio: '',
    noServicio: '',
    fechaYHoraRecogida: '',
    fechaYHoraEntrega: '',
    lugarRecogida: '',
    lugarEntrega: ''
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
    try {
      const response = await fetch('http://localhost:3001/api/goods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
      })
      const dataResponse = await response.json()

      if (dataResponse) {
        alert('Servicio registrado')
        setData({
          name: '',
          description: '',
          user: '',
          marca: '',
          modelo: '',
          anio: '',
          version: '',
          placas: '',
          servicio: '',
          noServicio: '',
          fechaYHoraRecogida: '',
          fechaYHoraEntrega: '',
          lugarRecogida: '',
          lugarEntrega: ''
        })
        navigate('/admin')
      }
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <Layout bg="bg-zinc-200">
      <NavBar />
      <div className="p-14 bg-zinc-200">
        <div className="w-full bg-white p-8 rounded-lg space-y-10">
          <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>Registrar servicio</h1>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input onChange={handleChange}
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <input onChange={handleChange}
                type="text"
                name="description"
                id="description"
                autoComplete="description"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="user" className="block text-sm font-medium text-gray-700">
                Usuario
              </label>
              <input onChange={handleChange}
                type="text"
                name="user"
                id="user"
                autoComplete="user"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="marca" className="block text-sm font-medium text-gray-700">
                Marca
              </label>
              <input onChange={handleChange}
                type="text"
                name="marca"
                id="marca"
                autoComplete="marca"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">
                Modelo
              </label>
              <input onChange={handleChange}
                type="text"
                name="modelo"
                id="modelo"
                autoComplete="modelo"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="anio" className="block text-sm font-medium text-gray-700">
                Año
              </label>
              <input onChange={handleChange}
                type="text"
                name="anio"
                id="anio"
                autoComplete="anio"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="version" className="block text-sm font-medium text-gray-700">
                Versión
              </label>
              <input onChange={handleChange}
                type="text"
                name="version"
                id="version"
                autoComplete="version"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>


            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="placas" className="block text-sm font-medium text-gray-700">
                Placas
              </label>
              <input onChange={handleChange}
                type="text"
                name="placas"
                id="placas"
                autoComplete="placas"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="servicio" className="block text-sm font-medium text-gray-700">
                Servicio
              </label>
              <input onChange={handleChange}
                type="text"
                name="servicio"
                id="servicio"
                autoComplete="servicio"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="noServicio" className="block text-sm font-medium text-gray-700">
                Número de servicio
              </label>
              <input onChange={handleChange}
                type="text"
                name="noServicio"
                id="noServicio"
                autoComplete="noServicio"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="fechaYHoraRecogida" className="block text-sm font-medium text-gray-700">
                Fecha y hora de recogida
              </label>
              <input onChange={handleChange}
                type="text"
                name="fechaYHoraRecogida"
                id="fechaYHoraRecogida"
                autoComplete="fechaYHoraRecogida"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="lugarRecogida" className="block text-sm font-medium text-gray-700">
                Lugar de recogida
              </label>
              <input onChange={handleChange}
                type="text"
                name="lugarRecogida"
                id="lugarRecogida"
                autoComplete="lugarRecogida"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-zinc-800 text-white px-3 py-2 rounded-md hover:bg-zinc-700"
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AddService