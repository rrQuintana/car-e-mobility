import { useState } from 'react'
import CarEMobilityLogo from '../../../assets/images/logo-small.png'
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      console.log(email, password)

      const response = await fetch('https://car-e-mobility.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()
      console.log(data)

      if (data?.token) {
        setError('')
        localStorage.setItem('token', data.token)
        navigate('/admin')
        console.log('Login successful')
      } else {
        setError('Error al iniciar sesión, usuario o contraseña incorrectos')
      }
    } catch (error) {
      setError('Correo electrónico o contraseña incorrectos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-1 h-screen justify-center items-center">
      <img src="https://images.unsplash.com/photo-1582586420444-9851313581b8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="hidden md:block h-screen w-1/2 object-cover" />
      <div className="bg-white  px-16 py-22 md:px-36 md:py-36 md:shadow-lg md:h-screen w-full md:w-1/2 flex flex-col items-center justify-center">
        <img src={CarEMobilityLogo} alt="Car-e Mobility" className="w-32 mb-[-30px]" />
        <h1 className="text-3xl font-semibold text-center">Iniciar sesión</h1>
        <form className="space-y-4 mt-4 w-full flex flex-col flex-1">
          <div className="space-y-2">
            <label htmlFor="email">Correo electrónico</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Contraseña</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button
            type='submit'
            onClick={handleLogin}
            className="w-full bg-red-500 text-white p-2 rounded-md">
            Iniciar sesión
          </button>
          <p className="text-gray-500 text-sm text-center"><span onClick={() => navigate('/')} className="text-blue-500 cursor-pointer underline">Volver</span></p>

          {
            error && <p className="text-red-500 text-sm text-center">{error}</p>
          }
        </form>
      </div>
    </div>
  )
}

export default LoginPage