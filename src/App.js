
import { Routes,Route } from 'react-router-dom';
import './App.css';
import AddStaff from './pages/addstaff/AddStaff';
import Navbar from './pages/navbar/Navbar';

function App() {
  return (
    <div className="App">
      
<Navbar/>
        <Routes>


            <Route exact path='/' element={<AddStaff />}/>
          



        </Routes>



    </div>
  );
}

export default App;
