import React , {useState}from 'react'
import editIcon from '../../assets/Edit.png'
import savebtn from '../../assets/save.png'
import filterbtn from '../../assets/Icon.png'
import Navbar from '../../Components/Navbar'

const YellowStatement = () => {
    const [editStatus,seteditStatus] = useState(false);
  return (
    <div className='w-full h-full flex flex-col items-center '>
   <Navbar first={"Update Attendance"} second={"Yellow Statement"}/>
       {/* body */}
    <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-center font-bold pt-4 pb-8'>Attendance-Summary</h1>
           <div className='flex'>
           <div className=' px-2 py-1'>Select Date </div>
           <div className='bg-white w-[200px]  px-2 py-1 ml-3 border-none rounded-sm'></div>
           </div>                
    </div>


    <div className=' bg-white max-w-[77vw] h-[50vh] relative border-none rounded-md mt-10 overflow-x-hidden overflow-y-scroll'>
            {/* table */}
            <div className="table-container overflow-x-auto h-[70vh] ">
              <table className="custom-table w-[77vw] border-separate border-spacing-y-1">

                <thead className="bg-gray-100 sticky top-0 z-10 border text-[10px]">
              
                    <th className='p-2 bg-gray-100 rounded-l-lg'>Sno. </th>
                    <th>Subject</th>
                    <th>Class-List</th>
                    <th>Total (Reg+ex)</th>
                    <th>Reg...</th>
                    <th>Not Reg...</th>
                    <th>Present</th>
                    <th>Absent</th>
                    <th className='p-2 bg-gray-100 rounded-r-lg'>UFM</th>
                
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
                
                  <tr className="text-center text-[9px] bg-white  border border-black">
                      <td className="p-1 rounded-l-lg">1.</td>
                      <td className="p-1 ">Database Management  System</td>
                      <td className="p-1 w-[300px]">BE 1ST YR INFO TECH , BE 1ST YR INFO TECH,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1  rounded-r-lg">154  34</td>
                  </tr>
                  <tr className="text-center text-[9px] bg-white  border border-black">
                      <td className="p-1 rounded-l-lg">1.</td>
                      <td className="p-1 ">Database Management  System</td>
                      <td className="p-1 w-[300px]">BE 1ST YR INFO TECH , BE 1ST YR INFO TECH,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1  rounded-r-lg">154  34</td>
                  </tr>
                  <tr className="text-center text-[9px] bg-white  border border-black">
                      <td className="p-1 rounded-l-lg">1.</td>
                      <td className="p-1 ">Database Management  System</td>
                      <td className="p-1 w-[300px]">BE 1ST YR INFO TECH , BE 1ST YR INFO TECH,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1  rounded-r-lg">154  34</td>
                  </tr>
                  <tr className="text-center text-[9px] bg-white  border border-black">
                      <td className="p-1 rounded-l-lg">1.</td>
                      <td className="p-1 ">Database Management  System</td>
                      <td className="p-1 w-[300px]">BE 1ST YR INFO TECH , BE 1ST YR INFO TECH,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1  rounded-r-lg">154  34</td>
                  </tr>
                  <tr className="text-center text-[9px] bg-white  border border-black">
                      <td className="p-1 rounded-l-lg">1.</td>
                      <td className="p-1 ">Database Management  System</td>
                      <td className="p-1 w-[300px]">BE 1ST YR INFO TECH , BE 1ST YR INFO TECH,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1  rounded-r-lg">154  34</td>
                  </tr>
                  <tr className="text-center text-[9px] bg-white  border border-black">
                      <td className="p-1 rounded-l-lg">1.</td>
                      <td className="p-1 ">Database Management  System</td>
                      <td className="p-1 w-[300px]">BE 1ST YR INFO TECH , BE 1ST YR INFO TECH,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1  rounded-r-lg">154  34</td>
                  </tr>
                  <tr className="text-center text-[9px] bg-white  border border-black">
                      <td className="p-1 rounded-l-lg">1.</td>
                      <td className="p-1 ">Database Management  System</td>
                      <td className="p-1 w-[300px]">BE 1ST YR INFO TECH , BE 1ST YR INFO TECH,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1  rounded-r-lg">154  34</td>
                  </tr>
                  <tr className="text-center text-[9px] bg-white  border border-black">
                      <td className="p-1 rounded-l-lg">1.</td>
                      <td className="p-1 ">Database Management  System</td>
                      <td className="p-1 w-[300px]">BE 1ST YR INFO TECH , BE 1ST YR INFO TECH,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH ,BE 1ST YR INFO TECH</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1 ">154  34</td>
                      <td className="p-1  rounded-r-lg">154  34</td>
                  </tr>

                   
                </tbody>
              </table>
            </div>
          </div>
   
    </div>
  )
}

export default YellowStatement
