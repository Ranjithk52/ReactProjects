
import './App.css';
import CreateProduct from './components/CreateProduct';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import ViewAllProducts from './components/ViewAllProducts';
import ViewProduct from './components/ViewProduct';
import UpdateProduct from './components/UpdateProduct';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import SigIn from './components/SigIn';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <SignUp/> */}
      {/* <SigIn/> */}
      <BrowserRouter>
      {/* <ul>
          <li>
            <Link to="/create">Create Product</Link>
          </li>
          <li>
            <Link to="/list">List Of Products</Link>
          </li>
        </ul> */}
      <Routes>
        <Route path="/create" element={<CreateProduct/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
        <Route path="/list" element={<ViewAllProducts/>}/>
        <Route path="/view/:id" element={<ViewProduct/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SigIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
