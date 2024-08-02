import { useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate()

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
            <p  onClick={() => navigate('/')} className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100  cursor-pointer'>
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
            <div className="space-y-3 pb-12">
              <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
                <i className="fas fa-phone"></i>&nbsp;&nbsp;  55 1234 5678 <br />
              </p>
              <p className='text-white duration-300 ease-in-out hover:underline hover:text-zinc-100'>
                <i className="fas fa-envelope"></i>&nbsp;&nbsp;  contacto@car-e-mobility.com
              </p>
              <p className="text-white  duration-300 ease-in-out hover:underline hover:text-zinc-100">
                <i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;  Car-e Mobility
              </p>
            </div>
            <div className="mt-auto flex flex-row justify-between items-center">
                <a href="https://www.linkedin.com/company/car-e-app/?viewAsMember=true" className="text-white text-3xl" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
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