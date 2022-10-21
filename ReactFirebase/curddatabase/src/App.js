
import './App.css';
import Employee from './components/Employee';
import View from './components/View';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/view' element={<View/>}/>
      <Route path='/create' element={<Employee/>}/>
      <Route path='/update/:ename' element={<Update/>}/>
      
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
