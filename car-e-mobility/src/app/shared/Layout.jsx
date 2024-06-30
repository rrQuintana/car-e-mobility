import AnimatedPage from './AnimatedPage'

function Layout({ children }) {
  return (
    <AnimatedPage cssProperty="justify-center items-center pt-12 w-full bg-green-500 flex flex-1">
      <div className='bg-zinc-100 w-full h-full mt-5'>
        {children}
      </div>
    </AnimatedPage>
  )
}

export default Layout