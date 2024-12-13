import React , {useState} from 'react'
import profile from '../../assets/user.png'
const Sidebar = () => {
    const [activeComponent, setactiveComponent] = useState('Dashboard') ///set it default in redux
  return (
    <div className='bg-white w-[22vw] h-[100vh]  font-semibold py-10 border flex  flex-col  items-center'>
        <div className='text-[25px] text-center leading-[13px]'>Exam User <br />
        <span className='text-[10px]'>Computer Department</span>
        </div>

        <div>
            <img src={profile} className='max-w-[80px] ml-6 mt-5' alt="" />
            <h1 className='text-center'>Hemant Makhwana</h1>
        </div>

        <div className='mt-16 space-y-1 text-[12px]'>   
        <div className='hover:bg-blue-300 hover:rounded-[14px] w-[190px] border-b-[1px] py-2 pl-12  pointer' onClick={()=>{setactiveComponent('Dashboard')}}>Dashboard</div>
        <div className='hover:bg-blue-300 hover:rounded-[14px] w-[190px] border-b-[1px] py-2 pl-12  pointer' onClick={()=>{setactiveComponent('ExamCode Generation')}}>ExamCode Generation</div>
        <div className='hover:bg-blue-300 hover:rounded-[14px] w-[190px] border-b-[1px] py-2 pl-12  pointer' onClick={()=>{setactiveComponent('TimeTable Generation')}}>TimeTable Generation</div>
        <div className='hover:bg-blue-300 hover:rounded-[14px] w-[190px] border-b-[1px] py-2 pl-12  pointer' onClick={()=>{setactiveComponent('Yellow Statement')}}>Yellow Statement</div>
        <div className='hover:bg-blue-300 hover:rounded-[14px] w-[190px] border-b-[1px] py-2 pl-12  pointer' onClick={()=>{setactiveComponent('Notification')}}>Notification</div>
        <div className='hover:bg-blue-300 hover:rounded-[14px] w-[190px] border-b-[1px] py-2 pl-12  pointer' onClick={()=>{setactiveComponent('My Profile')}}>My Profile</div>
        <div className='hover:bg-blue-300 hover:rounded-[14px] w-[190px] border-b-[1px] py-2 pl-12  pointer' onClick={()=>{setactiveComponent('LogOut')}}>LogOut</div>
        </div>

      </div>
  )
}

export default Sidebar