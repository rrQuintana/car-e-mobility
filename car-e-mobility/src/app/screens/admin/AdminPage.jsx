import { useEffect, useState } from 'react'
import Layout from '../../shared/Layout.jsx'
import NavBar from './NavBar.jsx'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

function AdminPage() {
  const navigate = useNavigate()
  const [services, setServices] = useState([])

  const fetchServices = async () => {
    const response = await fetch('http://localhost:3001/api/goods')
    const data = await response.json()
    setServices(data)
  }

  useEffect(() => {
    fetchServices()
  }, [])


  return (
    <Layout bg="bg-zinc-200">
      <NavBar />
      <div className="p-14 flex flex-1">
        <div className="w-full bg-white p-8 rounded-lg space-y-10">
          <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>Servicios</h1>
            <button
              type="button"
              onClick={() => navigate('/admin/add-service')}
              className="hidden md:block bg-white border-[0.9px] hover:bg-zinc-100 duration-300 ease-in-out border-zinc-800 rounded-full px-6 py-[10px] text-sm font-medium"
            >
              Registrar servicio
            </button>
          </div>
          <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-zinc-100">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Placas
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Servicio
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Fecha de creación
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-zinc-200">
              {services.map(service => (
                <tr key={service.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">{service.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">{service.placas}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">{service.servicio}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">{moment(service.createdAt).format('DD/MM/YYYY')}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-zinc-900">{service.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">
                    <button className="bg-zinc-800 text-white px-3 py-2 rounded-md hover:bg-zinc-700">
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </Layout>
  )
}

export default AdminPage