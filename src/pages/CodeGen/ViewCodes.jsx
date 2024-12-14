import React , {useState}from 'react'
import filterbtn from '../../assets/Icon.png'
import Navbar from '../../Components/Navbar'

const ViewCodes = () => {
    const [editStatus,seteditStatus] = useState(false);
    return (
     <div className='w-full h-full flex flex-col items-center '>
        <Navbar first={"Code Generation"} second={"View Codes"}/>
      {/* body */}
          <h1 className='text-3xl text-center font-bold pt-4 '>View Codes</h1>
  
      {/* table */}
           <div className='bg-white p-4 w-[80vw] relative border-none rounded-md mt-10'>
              {/* search */}
              <input className='w-[200px] border rounded-2xl px-3 py-1 text-[12px]' placeholder='Search'></input>
              {/* save ,edit and filter btn */}
              <div className='flex gap-3 absolute top-[1.45rem] right-[2.25rem]'>
                  <img src={filterbtn} alt="" onClick={()=>{seteditStatus(false)}} className='w-[17px] pointer' />
              </div>
              {/* table */}
              <div className="table-container overflow-x-auto h-[70vh] ">
                <table className="custom-table w-[77vw] border-separate border-spacing-y-4">
  
                  <thead className="bg-gray-100 sticky top-0 z-10 border text-[12px] font-bold">
                 <tr>
                      <th className='p-2 bg-gray-100 rounded-l-lg'>Sno. </th>
                      <th>Exam Code</th>
                      <th>Subject Code</th>
                      <th>Faculty-Name</th>
                      <th>Subject-Name</th>
                      <th className='p-2 bg-gray-100 rounded-r-lg'>Class-Name</th>
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
                       className="text-center bg-white shadow-md hover:shadow-lg text-[11px]">
                          <td className="p-3 rounded-l-lg">1</td>
                        <td className="p-3 ">DE23456</td>
                        <td className="p-3 ">23I2173</td>
                        <td className="p-3 ">John Doe</td>
                        <td className="p-3 ">Digital Communication Engineering</td>
                        <td className="p-3  rounded-r-lg">Be 1st Yr Information Technology ‘A’  & Be 1st Yr Information Technology ‘A’ </td>
                      </tr>
                      <tr
                       className="text-center bg-white shadow-md hover:shadow-lg text-[11px]">
                          <td className="p-3 rounded-l-lg">1</td>
                        <td className="p-3 ">DE23456</td>
                        <td className="p-3 ">23I2173</td>
                        <td className="p-3 ">John Doe</td>
                        <td className="p-3 ">Digital Communication Engineering</td>
                        <td className="p-3  rounded-r-lg">Be 1st Yr Information Technology ‘A’  & Be 1st Yr Information Technology ‘A’ </td>
                      </tr>
                      <tr
                       className="text-center bg-white shadow-md hover:shadow-lg text-[11px]">
                          <td className="p-3 rounded-l-lg">1</td>
                        <td className="p-3 ">DE23456</td>
                        <td className="p-3 ">23I2173</td>
                        <td className="p-3 ">John Doe</td>
                        <td className="p-3 ">Digital Communication Engineering</td>
                        <td className="p-3  rounded-r-lg">Be 1st Yr Information Technology ‘A’  & Be 1st Yr Information Technology ‘A’ </td>
                      </tr>
                      <tr
                       className="text-center bg-white shadow-md hover:shadow-lg text-[11px]">
                          <td className="p-3 rounded-l-lg">1</td>
                        <td className="p-3 ">DE23456</td>
                        <td className="p-3 ">23I2173</td>
                        <td className="p-3 ">John Doe</td>
                        <td className="p-3 ">Digital Communication Engineering</td>
                        <td className="p-3  rounded-r-lg">Be 1st Yr Information Technology ‘A’  & Be 1st Yr Information Technology ‘A’ </td>
                      </tr>
                      <tr
                       className="text-center bg-white shadow-md hover:shadow-lg text-[11px]">
                          <td className="p-3 rounded-l-lg">1</td>
                        <td className="p-3 ">DE23456</td>
                        <td className="p-3 ">23I2173</td>
                        <td className="p-3 ">John Doe</td>
                        <td className="p-3 ">Digital Communication Engineering</td>
                        <td className="p-3  rounded-r-lg">Be 1st Yr Information Technology ‘A’  & Be 1st Yr Information Technology ‘A’ </td>
                      </tr>
                      <tr
                       className="text-center bg-white shadow-md hover:shadow-lg text-[11px]">
                          <td className="p-3 rounded-l-lg">1</td>
                        <td className="p-3 ">DE23456</td>
                        <td className="p-3 ">23I2173</td>
                        <td className="p-3 ">John Doe</td>
                        <td className="p-3 ">Digital Communication Engineering</td>
                        <td className="p-3  rounded-r-lg">Be 1st Yr Information Technology ‘A’  & Be 1st Yr Information Technology ‘A’ </td>
                      </tr>
                      <tr
                       className="text-center bg-white shadow-md hover:shadow-lg text-[11px]">
                          <td className="p-3 rounded-l-lg">1</td>
                        <td className="p-3 ">DE23456</td>
                        <td className="p-3 ">23I2173</td>
                        <td className="p-3 ">John Doe</td>
                        <td className="p-3 ">Digital Communication Engineering</td>
                        <td className="p-3  rounded-r-lg">Be 1st Yr Information Technology ‘A’  & Be 1st Yr Information Technology ‘A’ </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    )
}

export default ViewCodes
