
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Input from './components/forms/Input';

function App() { 
  const [count, setCount] = useState(0)  
  const [name, setName] = useState("paul")  
  const [displayed, setDisplay] = useState(false)  

  const [duration, setDuration] = useState(5)  
  const [secondsLeft, setSecondsLeft] = useState(duration)  
  
  const increment = () =>{
    setCount((count) => ++count )
    
  }
  const handleChange = (e) =>{
    setName(e.target.value)
  }

  const handleDisplay = () => {
    setDisplay(!displayed);
  }
  const reset = () => {
    setName("")
    setDisplay(false)
  }
  const handleChangeDuration = (v) =>{
    setDuration(v)
    setSecondsLeft(v)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(v => { if(v <= 1){
        clearInterval(timer)
        return 0
      }
      return  v -1})

    }, 1000);
  
    return () => {
      clearInterval(timer)
    }
  }, [duration])
  



  return<>
    <div >
      <h1 className='m-4'>Hello World!</h1>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
    <div>
      <input type="text" value={name} onChange={handleChange}/>

      <button onClick={handleDisplay}>Submit</button>

      <button onClick={reset}>Reset</button>
      <p>Submitted name : {displayed && name}</p>
    </div>
    <hr />
    <h2 className='m-4'>TP Product List</h2>
    <ProductList/>
    <hr />
    
    {/* Exercice useEffect */}

    <Input placeholder="Timer" value={duration} onChange={handleChangeDuration} />
    <p>Décompte : {secondsLeft}</p>


  </>
}
export default App;
