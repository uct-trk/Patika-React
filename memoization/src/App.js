import { useState, useMemo, useCallback } from 'react'
import Header from './components/Header';

function App() {

  const [number, setNumber] = useState(0)
  const [text,setText] = useState("")

 /*  const data = useMemo(() => {
    return calculate()
  },[number]) */
  

  const increase = useCallback(() => {
    setNumber((prevState) => prevState + 1)
  },[]) 
  // eğer bir fonksiyon varsa ve herhangi bir child componente geçiyorsak tekrar tekrar render edilmesini istemiyorsak useCallback kullanılabilir


  const handleChange = (e) => {
    setText(e.target.value)
  }
  console.log(text)

  return (
    <div className="App">
      <Header increase={increase}/>
      <h1>{number}</h1>
     
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
