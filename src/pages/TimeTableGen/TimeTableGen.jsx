import React , {useState}from 'react'
import editIcon from '../../assets/Edit.png'
import savebtn from '../../assets/save.png'
import filterbtn from '../../assets/Icon.png'
import Navbar from '../Components/Navbar'
const TimeTableGen = () => {
 const [editStatus,seteditStatus] = useState(false);
  return (
   <div className='w-full h-full flex flex-col items-center '>
    <Navbar/>
    {/* body */}
    <div>
        <h1 className='text-4xl  font-bold pt-4 pb-8'>TimeTable Generation</h1>
        <div className='flex flex-col  gap-3'>
           <div className='flex'>
           <div className=' px-2 py-1'>Select Date </div>
           <div className='bg-white w-[230px]  px-2 py-1 ml-3'></div>
           </div>
           <div className='flex'>
           <div className=' px-2 py-1'>Subject Code </div>
           <div className='bg-white w-[230px]  px-2 py-1'></div>
           </div>
           <button className='bg-blue-400 text-white px-2 py-1 border rounded mt-5'>Add Subject Codes</button>
        </div>    
    </div>

    {/* table */}
         <div className='bg-white p-4 w-[80vw] relative border-none rounded-md mt-10'>
            {/* search */}
            <input className='w-[200px] border rounded-2xl px-3 py-1 text-[12px]' placeholder='Search'></input>
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
                    <th className='p-2 bg-gray-100 rounded-l-lg'>S no.</th>
                    <th>Date</th>
                    <th>Subject Name</th>
                    <th>Subject Code</th>
                    <th className='p-2 bg-gray-100 rounded-r-lg'>Remove</th>
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
                      <td className="p-3 ">12-10-2024</td>
                      <td className="p-3 ">Applied Mathematics 2</td>
                      <td className="p-3 ">2MERC3</td>
                      <td className="p-3  rounded-r-lg">Delete</td>
                    </tr>
                    <tr
                     className="text-center bg-white shadow-md hover:shadow-lg">
                        <td className="p-3 rounded-l-lg">1</td>
                      <td className="p-3 ">12-10-2024</td>
                      <td className="p-3 ">Applied Mathematics 2</td>
                      <td className="p-3 ">2MERC3</td>
                      <td className="p-3  rounded-r-lg">Delete</td>
                    </tr>
                    <tr
                     className="text-center bg-white shadow-md hover:shadow-lg">
                        <td className="p-3 rounded-l-lg">1</td>
                      <td className="p-3 ">12-10-2024</td>
                      <td className="p-3 ">Applied Mathematics 2</td>
                      <td className="p-3 ">2MERC3</td>
                      <td className="p-3  rounded-r-lg">Delete</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  )
}

export default TimeTableGen

