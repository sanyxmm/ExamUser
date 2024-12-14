import React from 'react'
import { useDispatch} from 'react-redux';
import { setactiveComponent } from '../StateManagement/ExamSlice'

const Navbar = ({first,second}) => {
  const dispatch = useDispatch();
  return (
    <div className=' w-[80vw] h-[7vh] pt-2 border-b-[1px] border-[#d8dde4]' >
    <button className='border-r-[1px] border-[#cdd2da] px-2 pt-1 hover:text-white hover:bg-blue-300 hover:rounded-sm' onClick={()=>{dispatch(setactiveComponent(first))}}>{first}</button>
    <button className=' px-2 pt-1 hover:text-white hover:bg-blue-300 hover:rounded-sm' onClick={()=>{dispatch(setactiveComponent(second))}}>{second}</button>
    </div>
  )
}

export default Navbar
