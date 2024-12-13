import './App.css';
import Navbar from './pages/Components/Navbar';
import Sidebar from './pages/Components/Sidebar';
import TimeTableGen from './pages/TimeTableGen/TimeTableGen';

function App() {
  return (
  <div className='flex w-full h-full bg-[#ECF3FF]'>
    <Sidebar/>
    <TimeTableGen/>
 </div>
  );
}

export default App;
