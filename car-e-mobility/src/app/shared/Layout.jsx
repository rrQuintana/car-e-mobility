import AnimatedPage from './AnimatedPage'

function Layout({ children, bg = 'bg-white' }) {
  return (
    <AnimatedPage cssProperty={`justify-center ${bg} items-center pt-10 w-full flex flex-1 min-h-screen`}>
      <div className='w-full min-h-full mt-5'>
        {children}
      </div>
    </AnimatedPage>
  )
}

export default Layout