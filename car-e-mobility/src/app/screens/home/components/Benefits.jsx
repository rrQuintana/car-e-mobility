import CariImage from '../../../../assets/images/25.jpg'

export const Benefit = ({ title, description }) => {
  return (
    <div className="flex flex-row w-full space-x-4 h-auto md:h-12 text-left">
      <div className="h-7 aspect-square bg-green-400 rounded-full flex justify-center items-center">
        <i className="text-white fa-solid fa-check"></i>
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-zinc-700">{description}</p>
      </div>
    </div>
  )
}



function Benefits() {
  return (
    <div className='min-h-screen bg-blue-50 flex flex-col justify-center items-center px-14 pt-10 space-y-10 md:space-y-auto'>
      <div className="w-2/3 md:w-5/6 lg:w-2/3 flex flex-col flex-1 justify-center items-center">
        <h1 className="text-center text-blue-900 font-semibold">
          RAZONES
        </h1>
        <h2 className="font-bold text-4xl md:text-5xl text-center">
          Mantenimiento <br /> sin complicaciones
        </h2>
      </div>
      <div className="w-full flex flex-row lg:space-x-12 md:pb-0">
        <div className="hidden lg:flex lg:flex-1">
          <img src={CariImage} alt="Car" className="rounded-t-lg shadow-zinc-700/10 shadow-lg overflow-hidden h-full aspect-square object-cover origin-center" />
        </div>
        <div className="flex flex-1 flex-col space-y-10 my-auto text-center md:text-left">
          <div className="space-y-3 md:space-y-5 lg:space-y-3">
            <h1 className="hidden md:block font-semibold text-5xl">
              En qué te podemos ayudar?
            </h1>
            <p className='text-lg'>En Car-e te ofrecemos un servicio completo y de calidad, para que puedas disfrutar de tus trayectos sin preocupaciones.</p>
          </div>

          <div className="flex flex-col space-y-14 md:space-y-10">
            <Benefit title="Ahorra tiempo" description="Olvídate de esperar en talleres, nosotros nos encargamos de todo." />
            <Benefit title="Sin interrupciones" description="Mantén tu rutina diaria sin preocupaciones mientras reparamos tu auto." />
            <Benefit title="Calidad garantizada" description="Trabajamos solo con los mejores mecánicos certificados y de confianza." />
            <Benefit title="Seguridad y confianza" description="Todos nuestros conductores y talleres están verificados para tu tranquilidad." />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Benefits