import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import UpdateStudent from './components/UpdateStudent';
import ViewStudent from './components/ViewStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAllStudents from './components/ViewAllStudents';

function App() {
  return (
    <div className="App">
    
    
      <BrowserRouter>
      <NavBar/>
      <Routes>



<Route path="/create" element={<CreateStudent/>}/>
<Route path="/update/:id" element={<UpdateStudent/>}/>
<Route path="/view/:id" element={<ViewStudent/>}/>
{/* <Route path="/delete/:id" element={<DeleteStudent/>}/> */}
<Route path="/list" element={<ViewAllStudents/>}/>

      </Routes>
      
      
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
