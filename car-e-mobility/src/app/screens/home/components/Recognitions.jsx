import DaltonLogo from '../../../../assets/images/DaltonLogo.jpeg';
import TalentLandLogo from '../../../../assets/images/TalentLandLogo.png';
import GlobalChangeMakersLogo from '../../../../assets/images/GlobalChangeMakersLogo.png';
import SantanderXLogo from '../../../../assets/images/SantanderXLogo.jpg';
import TrepcampLogo from '../../../../assets/images/TrepcampLogo.png';
import CarELogo from '../../../../assets/images/logo-small.png';

function Recognitions() {
  const logos = [
    {
      src: DaltonLogo,
      alt: "Dalton Logo",
      title: "Grupo Dalton",
      description: "Dalton Labs Programa de aceleración"
    },
    {
      src: TalentLandLogo,
      alt: "Talent Land Logo",
      title: "Talent Land",
      description: "Startup Battle 2024"
    },
    {
      src: GlobalChangeMakersLogo,
      alt: "Global Changemakers Logo",
      title: "Global Changemakers",
      description: "LATAM SUMMIT 2024"
    },
    {
      src: SantanderXLogo,
      alt: "Santander X Logo",
      title: "Banco Santander",
      description: "Santander X Award México 2023"
    },
    {
      src: TrepcampLogo,
      alt: "Trepcamp Logo",
      title: "Trepcamp",
      description: "Entrepreneurial Simulator NY 2022"
    }
  ];

  return (
    <div className="w-full text-center h-screen flex flex-col pace-y-12 justify-center items-center space-y-5 overflow-hidden">
      <div className='flex flex-col justify-center items-center mb-10'>
        <img src={CarELogo} className="h-48" alt="Car-e Logo" />
        <p className='text-3xl font-semibold text-center mt-[-30px]'>Reconocidos por:</p>
      </div>
      <div className='carousel-container'>
        <div className='carousel-row space-x-20'>
          <div className='inline-block p-4'>
            <img className='h-24 w-auto object-contain p-2' src={DaltonLogo} alt="Dalton Logo" />
            <h2 className='text-xl font-semibold'>Grupo Dalton</h2>
            <p>Dalton Labs Programa de aceleración</p>
          </div>
          <div className='inline-block p-4'>
            <img className='h-20 w-60 object-cover p-2' src={TalentLandLogo} alt="Dalton Logo" />
            <h2 className='text-xl font-semibold'>Talent Land</h2>
            <p>Startup Battle 2024</p>
          </div>
          <div className='inline-block p-4'>
            <img className='h-24 w-80 object-cover p-2' src={GlobalChangeMakersLogo} alt="Dalton Logo" />
            <h2 className='text-xl font-semibold'>Global Changemakers</h2>
            <p>LATAM SUMMIT 2024</p>
          </div>
          <div className='inline-block p-4'>
            <img className='h-24 w-72 object-cover p-2' src={SantanderXLogo} alt="Dalton Logo" />
            <h2 className='text-xl font-semibold'>Banco Santander</h2>
            <p>Santander X Award México 2023</p>
          </div>
          <div className='inline-block p-4'>
            <img className='h-24 w-64 object-contain p-2' src={TrepcampLogo} alt="Dalton Logo" />
            <h2 className='text-xl font-semibold'>Trepcamp</h2>
            <p>Entrepreneurial Simulator NY 2022</p>
          </div>
          <div className='inline-block p-4'>
            <img className='h-24 w-auto object-contain p-2' src={DaltonLogo} alt="Dalton Logo" />
            <h2 className='text-xl font-semibold'>Grupo Dalton</h2>
            <p>Dalton Labs Programa de aceleración</p>
          </div>
          <div className='inline-block p-4'>
            <img className='h-20 w-60 object-cover p-2' src={TalentLandLogo} alt="Dalton Logo" />
            <h2 className='text-xl font-semibold'>Talent Land</h2>
            <p>Startup Battle 2024</p>
          </div>
          <div className='inline-block p-4'>
            <img className='h-24 w-80 object-cover p-2' src={GlobalChangeMakersLogo} alt="Dalton Logo" />
            <h2 className='text-xl font-semibold'>Global Changemakers</h2>
            <p>LATAM SUMMIT 2024</p>
          </div>
          <div className='inline-block p-4'>
            <img className='h-24 w-72 object-cover p-2' src={SantanderXLogo} alt="Dalton Logo" />
            <h2 className='text-xl font-semibold'>Banco Santander</h2>
            <p>Santander X Award México 2023</p>
          </div>
          <div className='inline-block p-4'>
            <img className='h-24 w-64 object-contain p-2' src={TrepcampLogo} alt="Dalton Logo" />
            <h2 className='text-xl font-semibold'>Trepcamp</h2>
            <p>Entrepreneurial Simulator NY 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recognitions;
