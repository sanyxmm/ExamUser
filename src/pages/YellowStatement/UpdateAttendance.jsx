import React , {useState}from 'react'
import editIcon from '../../assets/Edit.png'
import savebtn from '../../assets/save.png'
import filterbtn from '../../assets/Icon.png'
import Navbar from '../../Components/Navbar'

const UpdateAttendance = () => {
 const [editStatus,seteditStatus] = useState(false);
  return (
   <div className='w-full h-full flex flex-col items-center '>
  <Navbar first={"Update Attendance"} second={"Yellow Statement"}/>
    {/* body */}
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl text-center font-bold pt-4 pb-8'>Mark Attendance</h1>
           <div className='flex'>
           <div className=' px-2 py-1'>Select Date </div>
           <div className='bg-white w-[230px]  px-2 py-1 ml-3'></div>
           </div>
   
           <button className='bg-blue-400 text-white px-2 py-1 border rounded mt-5'>Submit Attendance</button>   
    </div>


    {/* table */}
         <div className='bg-white p-4 w-[80vw] relative border-none rounded-md mt-10'>
            {/* search */}
            <input className='w-[200px] border rounded-2xl px-3 py-1 text-[12px]' placeholder='Search Enroll number'></input>
            {/* save ,edit and filter btn */}
            <div className='flex gap-3 absolute top-[1.45rem] right-[2.25rem]'>
                <img src={savebtn} alt="" onClick={()=>{seteditStatus(false)}} className='w-[17px] pointer' />
                <img src={editIcon} alt="" onClick={()=>{seteditStatus(true)}} className='w-[17px] pointer' />
                <img src={filterbtn} alt="" onClick={()=>{seteditStatus(false)}} className='w-[17px] pointer' />
            </div>
            {/* table */}
            <div className="table-container overflow-x-auto h-[70vh] ">
              <table className="custom-table w-[77vw] border-separate border-spacing-y-4">

                <thead className="bg-gray-100 sticky top-0 z-10 border">
                  <tr>
                    <th className='p-2 bg-gray-100 rounded-l-lg'>Sno. </th>
                    <th>Roll no.</th>
                    <th>Enrollment no.</th>
                    <th>Name</th>
                    <th className='p-2 bg-gray-100 rounded-r-lg'>Status</th>
                  </tr>
                </thead>


                <tbody>
                  {/* {orderdata.map((row, index) => (
                    <tr
                     key={index} 
                     className="text-center bg-white shadow-md hover:shadow-lg">
                        <td className="p-3 rounded-l-lg">1</td>
                      <td className="p-3 ">12-10-2024</td>
                      <td className="p-3 ">Applied Mathematics 2</td>
                      <td className="p-3 ">2MERC3</td>
                      <td className="p-3  rounded-r-lg">Delete</td>
                    </tr>
                  ))}  */}
                  <tr
                     className="text-center bg-white shadow-md hover:shadow-lg">
                        <td className="p-3 rounded-l-lg">1</td>
                      <td className="p-3 ">2312173</td>
                      <td className="p-3 ">DE22183</td>
                      <td className="p-3 ">John Doe</td>
                      <td className="p-3  rounded-r-lg">Delete</td>
                    </tr>
                    <tr
                     className="text-center bg-white shadow-md hover:shadow-lg">
                        <td className="p-3 rounded-l-lg">1</td>
                      <td className="p-3 ">2312173</td>
                      <td className="p-3 ">DE22183</td>
                      <td className="p-3 ">John Doe</td>
                      <td className="p-3  rounded-r-lg">Delete</td>
                    </tr>
                    <tr
                     className="text-center bg-white shadow-md hover:shadow-lg">
                        <td className="p-3 rounded-l-lg">1</td>
                      <td className="p-3 ">2312173</td>
                      <td className="p-3 ">DE22183</td>
                      <td className="p-3 ">John Doe</td>
                      <td className="p-3  rounded-r-lg">Delete</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  )
}
export default UpdateAttendance
