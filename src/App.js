import './App.css';
//---------------------------useRef Hook ----------------------------------
import React, { useEffect, useState , useRef} from 'react'

const App = () => {
  const [value, setValue] = useState(0)
  const count = useRef(0)
  // console.log(count) //{current : 0}

  useEffect(()=>{
    count.current = count.current +  1 ;
  })

  // When we state to count renders. useEffect re-renders infinite times and count increses
  //  so we use useRef which only incresase count only when component renders
  // const [count, setCount] = useState(0)
  // useEffect(()=>{
  //   setCount(prev => prev + 1)
  // })


  const inputElem = useRef();

  const btnClicked = ()=>{
    console.log(inputElem.current) // <input type='text' /> In this way we can access DOM elements
    inputElem.current.style.background = 'yellow'
    inputElem.current.value = 'Venu'
    // console.log(inputElem)  // {current : input}
  }

  return (
    <div>
      <input type="text" ref={inputElem} />
    <button onClick={btnClicked}>Click Here</button>
      <hr />

      <button onClick={()=>setValue((prev) => prev -1)}>-1</button>
      <h1>{value}</h1>
      <button onClick={()=>setValue((prev) => prev +1)}>+1</button>
      {/* <h1>Component rendered : {count}</h1> */}
      <h1>Component rendered : {count.current}</h1>
    </div>
  )
}

export default App;



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
