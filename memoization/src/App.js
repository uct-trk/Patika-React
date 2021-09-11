import react, { useState } from 'react'
import Header from './components/Header';
function App() {

  const [number, setNumber] = useState(0)

  const increase = () => {
    setNumber(number + 1)
  }

  return (
    <div className="App">
      <Header number={number > 5 ? number : 0}/>
      <h1>{number}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
