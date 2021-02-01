import './App.css';
import InputComponent from './components/InputComponent'; 
import ListComponent from './components/ListComponent';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#1F1E1A', paddingTop: '2rem'}}>
      <InputComponent />
      <ListComponent /> 
    </div>
  );
}

export default App;
