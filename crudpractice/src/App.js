import './App.css';
import AddUsers from './Components/AddUsers';
import AllUsers from './Components/AllUsers';
import EditForm from './Components/EditForm';
import Home from './Components/Home';
import LoginForm from './Components/Login';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registration from './Components/Registration';

function App() {
  return (
    <div >
     <Navbar />
     
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddUsers />}/>
          <Route path='/all' element={<AllUsers />}/>
          <Route path='/edit/:id' element={<EditForm />}/>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<Registration />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
