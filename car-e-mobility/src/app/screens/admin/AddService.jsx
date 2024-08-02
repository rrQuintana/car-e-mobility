import { useState } from "react"
import Layout from "../../shared/Layout"
import NavBar from "./NavBar"
import { useNavigate } from "react-router-dom"
import { Formik } from 'formik';

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

  return (
    <Layout bg="bg-zinc-200">
      <NavBar />
      <div className="p-14 bg-zinc-200">
        <div className="w-full bg-white p-8 rounded-lg space-y-12">
          <div className='flex justify-between'>
            <h1 className='text-3xl font-semibold'>Registrar servicio</h1>
          </div>
          <Formik
            initialValues={{
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
              lugarEntrega: '',
              estatus: 0
            }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Requerido';
              } else if (values.name.length < 5) {
                errors.name = 'Mínimo 5 caracteres';
              }

              if (!values.user) {
                errors.user = 'Requerido';
              } else if (values.user.length < 5) {
                errors.user = 'Mínimo 5 caracteres';
              }

              if (!values.marca) {
                errors.marca = 'Requerido';
              } else if (values.marca.length < 5) {
                errors.marca = 'Mínimo 5 caracteres';
              }

              if (!values.modelo) {
                errors.modelo = 'Requerido';
              } else if (values.modelo.length < 5) {
                errors.modelo = 'Mínimo 5 caracteres';
              }

              if (!values.anio) {
                errors.anio = 'Requerido';
              } else if (values.anio.length < 4) {
                errors.anio = 'Mínimo 4 caracteres';
              }

              if (!values.version) {
                errors.version = 'Requerido';
              } else if (values.version.length < 5) {
                errors.version = 'Mínimo 5 caracteres';
              }

              if (!values.placas) {
                errors.placas = 'Requerido';
              } else if (values.placas.length < 5) {
                errors.placas = 'Mínimo 5 caracteres';
              }

              if (!values.servicio) {
                errors.servicio = 'Requerido';
              } else if (values.servicio.length < 5) {
                errors.servicio = 'Mínimo 5 caracteres';
              }

              return errors;
            }}
            onSubmit={async (values) => {
              try {
                const response = await fetch('https://car-e-mobility.onrender.com/api/goods', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                  },
                  body: JSON.stringify(values)
                })

                if (response.status === 200) {
                  alert('Servicio registrado')
                  navigate('/admin')
                } else {
                  alert('Error al registrar el servicio')
                  console.error(response)
                }
              } catch (error) {
                console.error(error)
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <h3 className='text-xl font-semibold'>Datos generales</h3>
                  <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:gap-6">
                    <div className="w-full">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre del servicio*
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="user" className="block text-sm font-medium text-gray-700">
                        Usuario atendido*
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.user}
                        type="text"
                        name="user"
                        id="user"
                        autoComplete="user"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.user && touched.user && <div className="text-red-500">{errors.user}</div>}
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Descripción*
                    </label>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      type="text"
                      name="description"
                      id="description"
                      autoComplete="description"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {errors.description && touched.description && <div className="text-red-500">{errors.description}</div>}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className='text-xl font-semibold'>Datos del vehículo</h3>
                  <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:gap-6">
                    <div className="w-full">
                      <label htmlFor="marca" className="block text-sm font-medium text-gray-700">
                        Marca*
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.marca}
                        type="text"
                        name="marca"
                        id="marca"
                        autoComplete="marca"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.marca && touched.marca && <div className="text-red-500">{errors.marca}</div>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">
                        Modelo*
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.modelo}
                        type="text"
                        name="modelo"
                        id="modelo"
                        autoComplete="modelo"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.modelo && touched.modelo && <div className="text-red-500">{errors.modelo}</div>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="anio" className="block text-sm font-medium text-gray-700">
                        Año*
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.anio}
                        type="number"
                        name="anio"
                        id="anio"
                        autoComplete="anio"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.anio && touched.anio && <div className="text-red-500">{errors.anio}</div>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="version" className="block text-sm font-medium text-gray-700">
                        Versión*
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.version}
                        type="text"
                        name="version"
                        id="version"
                        autoComplete="version"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.version && touched.version && <div className="text-red-500">{errors.version}</div>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="placas" className="block text-sm font-medium text-gray-700">
                        Placas*
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.placas}
                        type="text"
                        name="placas"
                        id="placas"
                        autoComplete="placas"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.placas && touched.placas && <div className="text-red-500">{errors.placas}</div>}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className='text-xl font-semibold'>Datos del servicio</h3>
                  <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:gap-6">
                    <div className="w-full">
                      <label htmlFor="servicio" className="block text-sm font-medium text-gray-700">
                        Servicio*
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.servicio}
                        type="text"
                        name="servicio"
                        id="servicio"
                        autoComplete="servicio"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.servicio && touched.servicio && <div className="text-red-500">{errors.servicio}</div>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="fechaYHoraRecogida" className="block text-sm font-medium text-gray-700">
                        Fecha y hora de recogida
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fechaYHoraRecogida}
                        type="datetime-local"
                        name="fechaYHoraRecogida"
                        id="fechaYHoraRecogida"
                        autoComplete="fechaYHoraRecogida"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.fechaYHoraRecogida && touched.fechaYHoraRecogida && <div className="text-red-500">{errors.fechaYHoraRecogida}</div>}
                    </div>
                    <div className="w-full">
                      <label htmlFor="lugarRecogida" className="block text-sm font-medium text-gray-700">
                        Lugar de recogida
                      </label>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lugarRecogida}
                        type="text"
                        name="lugarRecogida"
                        id="lugarRecogida"
                        autoComplete="lugarRecogida"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {errors.lugarRecogida && touched.lugarRecogida && <div className="text-red-500">{errors.lugarRecogida}</div>}

                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-zinc-800 text-white px-3 py-2 rounded-md hover:bg-zinc-700"
                  >
                    Registrar
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  )
}

export default AddService