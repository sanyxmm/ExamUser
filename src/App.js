import './App.css';
import ViewCodes from './pages/CodeGen/ViewCodes';
import Sidebar from './Components/Sidebar';
import TimeTableGen from './pages/TimeTableGen/TimeTableGen';
import YellowStatement from './pages/YellowStatement/YellowStatement';
import UpdateAttendance from './pages/YellowStatement/UpdateAttendance';
import { useSelector} from 'react-redux';

function App() {
  const {activeComponent}  = useSelector((state) => state.examUser);

  return (
  <div className='flex w-full h-full bg-[#ECF3FF]'>
    <Sidebar/>
    {activeComponent==='Generate TimeTable' &&  <TimeTableGen/>}
    {activeComponent==='View Codes' &&  <ViewCodes/>}
    {activeComponent==='Yellow Statement' &&  <YellowStatement/>}
    {activeComponent==='Update Attendance' &&  <UpdateAttendance/>}
 </div>
  );
}

export default App;
