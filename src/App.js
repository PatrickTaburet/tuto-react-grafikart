
import { useState } from 'react';
import ProductList from './components/ProductList';

function App() { 
  const [count, setCount] = useState(0)  
  const [name, setName] = useState("paul")  
  const [displayed, setDisplay] = useState(false)  
  
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
    
  </>
}
export default App;
