const Step = ({ step, title, description, final = false }) => {
  return (
    <div className="flex flex-col h-40 md:h-32">
      <div className="flex flex-row space-x-3 items-center">
        <div className="w-10 h-10 aspect-square border-[2px] border-blue-900 rounded-full flex justify-center items-center">
          <i className={`fa-solid fa-${step} text-blue-900`}></i>
        </div>
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
      </div>
      <div className="flex flex-row space-x-3 h-full w-full">
        <div className="w-10 flex items-center justify-center">
          <div className={`w-[1px] ${!final && 'bg-blue-900/30'} h-full ml-[2px]`}></div>
        </div>
        <p className="flex flex-1 text-lg font-light text-zinc-500">{description}</p>
      </div>
    </div>
  )
}

function HowItWorks() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center space-y-4 py-20 md:py-0">
      <div className="w-5/6 lg:w-2/3 flex flex-row justify-center items-center">
        <div className="flex flex-col space-y-12">
          <h2 className="font-bold text-4xl">
            Cómo hacemos que tus reparaciones sean sencillas.
          </h2>
          <div className="flex-1 flex flex-row">
            <div className="lg:w-1/2 lg:pr-5">
              <Step
                step="clipboard-list"
                title="Agenda tu servicio"
                description="Desde la app selecciona el problema que presenta tu auto."
              />
              <Step
                step="box"
                title="Nosotros lo recogemos"
                description="Un conductor recogerá tu vehículo en tu ubicación."
              />
              <Step
                step="kit-medical"
                title="Reparamos tu auto"
                description="Repararemos tu auto mientras recibes seguimientos en tiempo real."
              />
              <Step
                final={true}
                step="circle-check"
                title="Te lo entregamos listo"
                description="Una vez reparado, te lo devolveremos en la ubicación que nos indiques."
              />
            </div>
            <div className="hidden md:block md:w-1/2 h-[500px] ml-5 shadow-lg">
              <img src={'https://images.unsplash.com/photo-1597766325363-f5576d851d6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className='w-full h-full object-cover bg-slate-500 rounded-lg' alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowItWorks