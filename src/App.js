import './App.css';
// --------------------------useContext Hook ------------------------------ 
import React from 'react'
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <Profile/>
    </div>
  )
}

export default App


// -----------------------useCallback Hook -----------------------
// import React, { useCallback, useState } from 'react'
// import Header from './components/Header';

// const App = () => {
//   const [count, setCount] = useState(0)

//   // const newFn = () =>{} Here every it render this function produces a different instance so it render every time 
  
//   const newFn = useCallback(()=>{}, [])

//   return (
//     <div>
//       <Header newFn={newFn}/>
//       <h1>Count : {count}</h1>
//       <button onClick={()=>setCount(count=>count+1)}>Click to ++</button>      
//     </div>
//   )
// }

// export default App




// --------------------------useMemo Hook ------------------------------
// import React, {useMemo, useState} from 'react'

// const App = () => {
//   const [number, setNmber] = useState(0)
//   const [counter, setCounter] = useState(0)

//   function cubeOfNum(num){
//     console.log('calculation done!')
//     return Math.pow(num, 3)
//   }

//   // const result = cubeOfNum(number) //this function call everytime when component render 
//   // but we need to call only when number changes 
//   // So we use useMemo which will change only when there dependencies updates 
//   const result = useMemo(()=>{return cubeOfNum(number)},[number])

//   return (
//     <div>
//       <>
//       <input type="number" value={number} onChange={(e)=>{setNmber((e.target.value))}} />
//       <h1>Cube of number : {result}</h1>

//       <button onClick={()=>setCounter(counter => counter+1)}>Counter +++</button>
//       <h1>Render : {counter}</h1>
//       </>
//     </div>
//   )
// }

// export default App


//---------------------------useRef Hook ----------------------------------
// import React, { useEffect, useState , useRef} from 'react'

// const App = () => {
//   const [value, setValue] = useState(0)
//   const count = useRef(0)
//   // console.log(count) //{current : 0}

//   useEffect(()=>{
//     count.current = count.current +  1 ;
//   })

//   // When we state to count renders. useEffect re-renders infinite times and count increses
//   //  so we use useRef which only incresase count only when component renders
//   // const [count, setCount] = useState(0)
//   // useEffect(()=>{
//   //   setCount(prev => prev + 1)
//   // })


//   const inputElem = useRef();

//   const btnClicked = ()=>{
//     console.log(inputElem.current) // <input type='text' /> In this way we can access DOM elements
//     inputElem.current.style.background = 'yellow'
//     inputElem.current.value = 'Venu'
//     // console.log(inputElem)  // {current : input}
//   }

//   return (
//     <div>
//       <input type="text" ref={inputElem} />
//     <button onClick={btnClicked}>Click Here</button>
//       <hr />

//       <button onClick={()=>setValue((prev) => prev -1)}>-1</button>
//       <h1>{value}</h1>
//       <button onClick={()=>setValue((prev) => prev +1)}>+1</button>
//       {/* <h1>Component rendered : {count}</h1> */}
//       <h1>Component rendered : {count.current}</h1>
//     </div>
//   )
// }

// export default App;



// ------------------------------useEffect Hook---------------------------------------
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)

//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(count => count + 1)
//     }, 2000)
//   },[])
//   // [] Correct
//   // [count] X 
//   // '' X 

//   return (
//     <div>
//       <h1>I have rendered {count} times!!!!</h1>
//     </div>
//   )
// }

// export default App



// --------------------------------useState Hook--------------------------------------
// import {useState} from 'react'
// function App() {
//   const [car, setCar] = useState({
//     brand: 'Ferrari',
//     color : 'Red',
//     year : 2023,
//     model : 'Roma'
//   })

//   const [count, setCount] = useState(0) 

//   const changeBrand = () =>{
//     setCar((prevState) => ({...prevState, brand : 'Tesla'}))
//   }
//   const changeColor = () =>{
//     setCar((prevState) => ({...prevState, color : 'Black'}))
//   }
//   const changeYear = () =>{
//     setCar((prevState) => ({...prevState, year : 2024}))
//   }
//   const changeModel = () =>{
//     setCar((prevState) => ({...prevState, model : 'Model X'}))
//   }

//   const increaseCount = ()=>{
//     setCount(prev => (prev + 4))
//   }

//   return (
//    <>
//    <h1>Counter : 0</h1>
//    <button onClick={increaseCount}>Increase</button>


//    <hr />

//    <h1>My {car.brand}</h1>
//    <h2>It's {car.color} {car.model} from {car.year}</h2>
//    <button onClick={changeColor}>Black</button>
//    <button onClick={changeBrand}>Tesla</button>
//    <button onClick={changeModel}>Model X</button>
//    <button onClick={changeYear}>2024</button>
//    </>
//   );
// }

// export default App;
