import { useState, useMemo } from 'react'
import Header from './components/Header';

function App() {

  const [number, setNumber] = useState(0)
  const [text,setText] = useState("")

  const data = useMemo(() => {
    return calculate()
  },[number])
  

  const increase = () => {
    setNumber(number + 1)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }
  console.log(text)

  return (
    <div className="App">
      <Header number={number > 5 ? number : 0} data={data}/>
      <h1>{number}</h1>
      <button onClick={increase}>+</button>
      <br />
      <br/>
      <input value={text} onChange={handleChange} type="text" />
    </div>
  );
}

function calculate(){
  console.log("Calculating...");
  for(let i = 0; i < 1000; i++){}
  console.log("calculating completed")

  return {name : "ugurcan"}
}

export default App;
