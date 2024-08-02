import aviso_privacidad from "../../../assets/aviso_privacidad.pdf"

function PrivacyPolicy() {
  return (
    <iframe src={aviso_privacidad} className="flex flex-1 w-full h-screen" ></iframe>
  )
}

export default PrivacyPolicy