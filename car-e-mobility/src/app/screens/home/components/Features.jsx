

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row w-full space-y-2 md:space-x-5 md:space-y-0 md:h-32 group-hover group items-center md:items-start">
      <div className="w-12 h-auto aspect-square bg-blue-900 rounded-full flex justify-center items-center shadow-md md:p-2">
        <i className={`text-white fa-solid fa-${icon} text-2xl`}></i>
      </div>
      <div className="space-y-1 text-center md:text-left">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-zinc-700">{description}</p>
      </div>
    </div>
  )
}

function Features() {

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center space-y-4 md:pb-0 pb-40">
      <div className="space-y-1">
        <h1 className="text-center text-blue-900 font-semibold">
          CARACTERÍSTICAS
        </h1>
        <h2 className="font-bold text-4xl">
          Qué te ofrecemos
        </h2>
      </div>
      <div className="w-2/3 md:w-5/6 lg:w-2/3 flex flex-col justify-center items-center space-y-12">
        <p className="w-full text-center text-zinc-700 text-xl font-light">
          Nuestra app te ofrece una solución completa para cualquier problema de tu auto. Selecciona el problema desde la app y deja lo demás en nuestras manos.
        </p>
        <div className="w-full flex flex-col md:flex-row space-y-20 md:space-y-0">
          <div className="w-full md:w-1/2 space-y-20 md:space-y-5 md:pr-10">
            <Feature
              icon="user-doctor"
              title="Recogida y entrega"
              description="Un conductor recogerá tu vehículo en tu ubicación y te lo devolverá una vez reparado."
            />
            <Feature
              icon="wrench"
              title="Talleres autorizados"
              description="Llevamos tu auto a uno de nuestros talleres autorizados para garantizar reparaciones de alta calidad."
            />
            <Feature
              icon="bell"
              title="Actualizaciones en tiempo real"
              description="Recibe notificaciones y seguimientos en tiempo real sobre el estado de la reparación."
            />
          </div>
          <div className="w-full md:w-1/2 space-y-20 md:space-y-5 md:pr-10">
            <Feature
              icon="spa"
              title="Facilidad y comodidad"
              description="Todo el proceso se gestiona a través de nuestra app, brindándote una experiencia sin complicaciones."
            />
            <Feature
              icon="medal"
              title="Transparencia en costos"
              description="Conoce el costo estimado de la reparación antes de que se realice, sin sorpresas."
            />
            <Feature
              icon="headset"
              title="Soporte al cliente"
              description="Nuestro equipo de soporte está disponible para resolver cualquier duda o inconveniente que puedas tener durante el proceso."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features