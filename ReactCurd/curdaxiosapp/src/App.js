
import './App.css';
import Create from './components/Create';
import EmployeeList from './components/EmployeeList';
import Update from './components/Update';
import View from './components/View';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      
    <BrowserRouter>
    <ul>
      <li><Link to="/create">Create Employee</Link></li>
      <li><Link to="/list">List Employees</Link></li>
    </ul>

    <Routes>
      <Route path='/create' element={<Create/>}/>
      <Route path='/list' element={<EmployeeList/>}/>
      <Route path='/update:id' element={<Update/>}/>
      <Route path='/view:id' element={<View/>}/>
    </Routes>
    </BrowserRouter>



    </div>
  );
}

export default App;
