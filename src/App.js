import {useState} from 'react'
import './App.css';

function App() {
  const [car, setCar] = useState({
    brand: 'Ferrari',
    color : 'Red',
    year : 2023,
    model : 'Roma'
  })

  const [count, setCount] = useState(0) 

  const changeBrand = () =>{
    setCar((prevState) => ({...prevState, brand : 'Tesla'}))
  }
  const changeColor = () =>{
    setCar((prevState) => ({...prevState, color : 'Black'}))
  }
  const changeYear = () =>{
    setCar((prevState) => ({...prevState, year : 2024}))
  }
  const changeModel = () =>{
    setCar((prevState) => ({...prevState, model : 'Model X'}))
  }

  const increaseCount = ()=>{
    setCount(prev => (prev + 4))
  }

  return (
   <>
   <h1>Counter : 0</h1>
   <button onClick={increaseCount}>Increase</button>


   <hr />

   <h1>My {car.brand}</h1>
   <h2>It's {car.color} {car.model} from {car.year}</h2>
   <button onClick={changeColor}>Black</button>
   <button onClick={changeBrand}>Tesla</button>
   <button onClick={changeModel}>Model X</button>
   <button onClick={changeYear}>2024</button>
   </>
  );
}

export default App;
