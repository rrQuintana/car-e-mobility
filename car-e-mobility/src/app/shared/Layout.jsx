import AnimatedPage from './AnimatedPage'

function Layout({ children }) {
  return (
    <AnimatedPage cssProperty="justify-center bg-white items-center pt-10 w-full bg-green-500 flex flex-1">
      <div className='w-full h-full mt-5'>
        {children}
      </div>
    </AnimatedPage>
  )
}

export default Layout