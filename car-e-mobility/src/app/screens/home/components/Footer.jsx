import { useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate()

  return (
    <div className='bg-zinc-900 py-12 flex justify-center items-center'>
      <div className="w-5/6 flex flex-col md:flex-row justify-between space-y-12 md:space-y-0">
        <div className="space-y-3">
          <p className='text-center font-semibold text-white text-5xl md:text-4xl lg:text-5xl text-center md:text-left'>Car-e Mobility.</p>
          <p className='text-white text-center md:text-left'>© 2024 Car-e Mobility. </p>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center md:flex-row md:justify-between space-y-12 md:space-y-0">
          <div className="space-y-3">
            <p className='font-semibold text-white text-3xl'>Empresa</p>
            <p onClick={() => navigate('/')} className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100  cursor-pointer'>
              Inicio
            </p>
            <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100  cursor-pointer'>
              <a href="mailto:contacto@car-e-mobility.com">
                Contacto
              </a>
            </p>
            <p onClick={() => navigate('aviso-privacidad')} className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100  cursor-pointer'>
              Política de privacidad
            </p>
            <p onClick={() => navigate('login')} className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100 cursor-pointer'>
              Portal para colaboradores
            </p>
          </div>
          <div className="flex flex-col">
            <p className='font-semibold text-white text-3xl mb-3'>Contacto</p>
            <div className="space-y-3 pb-12 flex flex-col">
              <a href="https://wa.link/k492al" target="_blank" className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
                <i className="fas fa-phone"></i>&nbsp;&nbsp;  +52 55 2543 3929 <br />
              </a>
              <a href="mailto:contacto@car-e-mobility.com" target='_blank' className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
                <i className="fas fa-envelope"></i>&nbsp;&nbsp;  contacto@car-e-mobility.com
              </a>
              <a href="https://www.linkedin.com/company/car-e-app" target='_blank' className="text-white  duration-300 ease-in-out hover:underline hover:text-zinc-100">
                <i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;  Car-e Mobility
              </a>
            </div>
            <div className="mt-auto flex flex-row justify-between items-center">
              <a href="https://www.facebook.com/profile.php?id=100094529103663" className="text-white text-3xl" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.tiktok.com/@car.e.mobility?_t=8oVy3fgccMA&_r=1" className="text-white text-3xl" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://www.instagram.com/car.e.app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white text-3xl" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.link/k492al" className="text-white text-3xl" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer