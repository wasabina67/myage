import './App.css';
import { calculateAge } from './utils';

function App() {
  const birthDate = "1993-08-31";
  const age = calculateAge(birthDate);

  return (
    <div className="App">
      <h1>{ age }</h1>
    </div>
  );
}

export default App;
