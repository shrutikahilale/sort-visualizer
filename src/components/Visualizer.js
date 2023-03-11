import React, { useState } from 'react'
import '../App.css'
import ArrayBlock from './ArrayBlock'

function Visualizer(props) {
    const size = props.array.length

    const arr = props.array.map((e, i) => {
        return (i === size - 1 ?
            <span key={i}> {e} </span> :
            <span key={i}> {e} ,</span>)
    })

    // declaring array as state object
    const [stateArray, setArrayElements] = useState(props.array)

    const arrayBlocks = stateArray.map((e, i) => {
        return (<ArrayBlock element={e} key={i} />)
    })

    // declaring backgroundColor as state object
    const [backgroundColor, setBlockElementsColor] = useState('#38E7FF')

    function visualize() {
        for (let i = 0; i < size; i++) {
            for (let j = i; j < size - 1; j++) {
                setTimeout(() => {
                    setArrayElements(stateArray => {
                        // Copy the current array
                        const tempArray = [...stateArray];
                        // Do the swap
                        swap(tempArray, j, j + 1)
                        // Set the state by returning the update
                        return tempArray
                    });

                    setBlockElementsColor(arrayBlocks => {
                        const tempBlocks = [...arrayBlocks];
                        changeColor(tempBlocks, j, j + 1)
                        return tempBlocks
                    });
                }, 2000 * (i + 1));
            }
        }
    }

    function swap(tempArray, x, y) {
        if (tempArray[x] > tempArray[y]) {
            let t = tempArray[x]
            tempArray[x] = tempArray[y]
            tempArray[y] = t;
        }
    }

    function changeColor(tempBlocks, x, y) {
        // tempBlocks[x].style.backgroundColor = "green"
        // tempBlocks[y].style.backgroundColor = "green"
        console.log(tempBlocks[x], ' ', tempBlocks[y])
    }

    return (
        <div className='d-f f-c g-2 j-c visualize-section'>
            <header>{props.heading}</header>
            <div>size = {size}</div>
            <div>array =&#123;{arr}&#125;</div>

            <div className='d-f j-c arrayBlocks-section'>{arrayBlocks}</div>

            <div className="buttons d-f">
                {/* <button className={`btn ${btnText === 'Visualize' ? 'bg-green' : 'bg-red'}`}
                    onClick={`${btnText}` === 'Visualize' ? { visualize } : { stop }}>
                    {btnText}
                </button> */}
                <button className='btn' onClick={visualize}>Visualize</button>
                <button className='btn' id='reset-btn'>Reset</button>
            </div>
        </div >
    )
}

export default Visualizer
