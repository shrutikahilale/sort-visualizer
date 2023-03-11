import React, { useState } from 'react'
import '../App.css'
import ArrayBlock from './ArrayBlock'
import { Link, useLocation } from 'react-router-dom'

function Visualizer({ array }) {
    // const location = useLocation()

    // const array = location.state.array;
    // const size = array.length
    // console.log(array)

    // const arr = array.map((e, i) => {
    //     return (i === size - 1 ?
    //         <span key={i}> {e} </span> :
    //         <span key={i}> {e} ,</span>)
    // })

    // declaring array as state object
    // const [stateArray, setArrayElements] = useState(array)

    // const arrayBlocks = stateArray.map((e, i) => {
    //     return (<ArrayBlock element={e} key={i} />)
    // })

    // function visualize() {
    //     for (let i = 0; i < size; i++) {
    //         for (let j = i; j < size - 1; j++) {
    //             setTimeout(() => {
    //                 setArrayElements(stateArray => {
    //                     // Copy the current array
    //                     const tempArray = [...stateArray];
    //                     // Do the swap
    //                     swap(tempArray, j, j + 1)
    //                     // Set the state by returning the update
    //                     return tempArray
    //                 });
    //             }, 2000 * (i + 1));
    //         }
    //     }
    // }

    // function swap(tempArray, x, y) {
    //     if (tempArray[x] > tempArray[y]) {
    //         let t = tempArray[x]
    //         tempArray[x] = tempArray[y]
    //         tempArray[y] = t;
    //     }
    // }

    return (
        // <Link to={'/Visualizer'} >
        //     <div className='d-f f-c g-2 j-c visualize-section'>
        //         <header>{location.state.title}</header>
        //         <div>
        //             <div>size = {size}</div>
        //             <div >array = &#123;{arr}&#125;</div>
        //         </div>

        //         <div className='d-f j-c arrayBlocks-section font-roboto-mono'>{arrayBlocks}</div>

        //         <div className="buttons d-f">
        //             {/* <button className={`btn ${btnText === 'Visualize' ? 'bg-green' : 'bg-red'}`}
        //             onClick={`${btnText}` === 'Visualize' ? { visualize } : { stop }}>
        //             {btnText}
        //         </button> */}
        //             <button className='btn' onClick={visualize}>Visualize</button>
        //             <button className='btn' id='reset-btn'>Reset</button>
        //         </div>
        //     </div >
        // </Link>

        <h3>HELLO</h3>
    )
}

export default Visualizer
