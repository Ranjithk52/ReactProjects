
import './App.css';
import ChildComponent from './Components/ChildComponent';
import Footer from './Components/Footer';
import Home from './Components/Home';
import MainComponent from './Components/MainComponent';
import SubComponent from './Components/SubComponent';

function App() {
  let id
  let name
  return (
    <div className="App">
      <h2>Welcome to ReactJS</h2>
      <Home/>
      <MainComponent/>
      <ChildComponent id={101} name={hello}/>
      <Footer/>
      <SubComponent/>
    </div>
  );
}

export default App;
