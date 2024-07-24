import { useState } from 'react'
import CarEMobilityLogo from '../../../assets/images/logo-small.png'
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(email
    , password)

    const response = await fetch('http://localhost:3001/api/login', {
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
  }

  return (
    <div className="bg-red-500 flex flex-1 h-screen justify-center items-center">
      <img src="https://images.unsplash.com/photo-1582586420444-9851313581b8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-screen w-1/2 object-cover" />
      <div className="bg-white p-36 shadow-lg h-screen w-1/2 flex flex-col items-center justify-center">
        <img src={CarEMobilityLogo} alt="Car-e Mobility" className="w-32 mb-[-30px]" />
        <h1 className="text-3xl font-semibold text-center">Iniciar sesión</h1>
        <form className="space-y-4 mt-4">
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
          <button onClick={handleLogin} className="w-full bg-red-500 text-white p-2 rounded-md">Iniciar sesión</button>
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