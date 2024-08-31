import './App.css';
import { calculateAge } from './utils';

function App() {
  const birthDate = "1993-11-10";
  const age = calculateAge(birthDate);

  return (
    <div className="App">
      <h1>{ age }</h1>
    </div>
  );
}

export default App;
