


import Menubar from "./menubar"

const Navbar = ({logs}:any) => {
 
 
  return (
    <div className='h-32 max-w-7xl  px-3  m-auto '>
      <div className='flex items-center justify-between h-full'>
      <div className='text-xl font-semibold'>SAKE</div>
      <div className='flex gap-x-6 items-center'>
        {logs}
        <Menubar/>
      </div>
      </div>
    </div>
  )
}

export default Navbar
