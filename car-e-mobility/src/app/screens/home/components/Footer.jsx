function Footer() {
  return (
    <div className='bg-zinc-900 py-12 flex justify-center items-center'>
      <div className="w-5/6 flex flex-row justify-between">
        <div className="space-y-3">
          <p className='text-center font-semibold text-white text-5xl'>Car-e Mobility.</p>
          <p>
            <span className='text-white'>© 2024 Car-e Mobility. </span>
          </p>
        </div>
        <div className="w-1/2 flex flex-row justify-between">
          <div className="space-y-3">
            <p className='font-semibold text-white text-3xl'>Empresa</p>
            <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
              Inicio
            </p>
            <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
              Nosotros
            </p>
            <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
              Contacto
            </p>
            <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
              Términos y condiciones
            </p>
            <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
              Política de privacidad
            </p>
            <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
              Colaboradores
            </p>
          </div>
          <div className="space-y-3">
            <p className='font-semibold text-white text-3xl'>Contacto</p>
            <div className="space-y-1">
              <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
                <i className="fas fa-phone"></i>&nbsp;  55 1234 5678 <br />
              </p>
              <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
                <i className="fas fa-envelope"></i>&nbsp;  contacto@car-e-mobility.com
              </p>
              <p className="text-white  duration-300 ease-in-out hover:underline hover:text-zinc-100">
                <i className="fa-brands fa-linkedin"></i>&nbsp;  Car-e Mobility
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer