import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-[80vw] h-[7vh] pt-2 border-b-[1px] border-[#d8dde4]'>
    <button className='border-r-[1px] border-[#cdd2da] px-2 pt-1 hover:text-white hover:bg-blue-300 hover:rounded-sm'>Generate TimeTable</button>
    <button className=' px-2 pt-1 hover:text-white hover:bg-blue-300 hover:rounded-sm'>View TimeTable</button>
    </div>
  )
}

export default Navbar
