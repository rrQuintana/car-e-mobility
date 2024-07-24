import CariImage from '../../../../assets/images/carimage.webp'

const Benefit = ({ title, description }) => {
  return (
    <div className="flex flex-row w-full space-x-4 h-12">
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
    <div className='bg-blue-50 flex flex-col justify-center items-center px-14 pt-10 space-y-10'>
      <div className="w-2/3 flex flex-col justify-center items-center">
        <h1 className="text-center text-blue-900 font-semibold">
          RAZONES
        </h1>
        <h2 className="font-bold text-5xl text-center">
          Mantenimiento <br /> sin complicaciones
        </h2>
      </div>
      <div className="w-full flex flex-row space-x-12">
        <div className="flex flex-1">
          <img src={CariImage} alt="Car" className="rounded-t-lg shadow-zinc-700/10 shadow-lg overflow-hidden h-full aspect-square object-cover origin-center" />
        </div>
        <div className="flex flex-1 flex-col space-y-10 my-auto">
          <div className="space-y-3">
            <h1 className="font-semibold text-5xl">
              En qué te podemos ayudar?
            </h1>
            <p className='text-lg'>En Car-e te ofrecemos un servicio completo y de calidad, para que puedas disfrutar de tus trayectos sin preocupaciones.</p>
          </div>

          <div className="flex flex-col space-y-14">
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