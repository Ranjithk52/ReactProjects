
import './App.css';
import Employees from './components/Employees';

function App() {
  return (
    <div className="App">
      <h1>Employee Information</h1><hr/>
      <Employees id="101" name="Ramesh"/>
      <Employees id="102" name="Rajesh"/>
      <Employees id="103" name="Rakesh"/>
    </div>
  );
}

export default App;
