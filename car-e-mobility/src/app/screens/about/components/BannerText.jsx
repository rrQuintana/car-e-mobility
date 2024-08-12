import Stores from '../../../../assets/images/stores.jpeg'

function BannerText() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="md:w-4/5 flex flex-row md:flex-col lg:flex-row justify-center items-center relative h-full top-[-50px] max-w-screen overflow-hidden">
        <div className="w-full md:w-4/6">
          <div className="p-8 lg:p-0 space-y-12">
            <div className="text-center">
              <p className='text-5xl md:text-8xl font-medium'>Más que un taller</p>
              <p className='text-6xl md:text-9xl font-semibold'>Somos <br className="block md:hidden" /> <span className="text-blue-950">Car</span>-<span className="text-red-500">e</span></p>
            </div>
            <div className="flex flex-col space-y-8 w-full mx-auto lg:mx-0 justify-center items-center">
              <a
                href='https://api.whatsapp.com/send?phone=5215525433929&text=Hola%20Car-e!%20'
                target='_blank'
                className="flex flex-row shadow-lg bg-green-400 hover:bg-green-500 duration-300 ease-in-out rounded-full lg:w-3/5 py-4 px-6 h-14 space-x-3 items-center justify-center">
                <i className="fa-brands fa-whatsapp text-3xl text-white"></i>
                <p className="text-white text-xl text-center lg:text-left font-medium">
                  Cotizar y agendar
                </p>
              </a>
              <div className='block space-y-2 bottom-24 ms-3'>
                <p className='text-center'>Próximamente en:</p>
                <img src={Stores} alt="Stores" className="w-56 object-contain mx-auto md:mx-0" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default BannerText