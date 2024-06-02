import Sidebar from './components/Sidebar'
import './App.css';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Status from './components/Status';

function App() {
  return (
    <BrowserRouter>
    <div className="h-full bg-[#303c5c] flex justify-center items-center gap-5 py-10">
      <Sidebar setTitle="IDS"/>
      <Routes>
        <Route exact path='/Intrusion-Detection-System' element={<Status/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
