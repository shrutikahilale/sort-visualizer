import React, { useState } from 'react'
import '../App.css'
import ArrayBlock from './ArrayBlock'

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
    const [bgColors, setBgColors] = useState(new Array(array.length).fill('styleBlueBg'))
    const [data, setData] = useState(array)

    const arrayBlocks = data.map((e, i) => {
        return (<ArrayBlock element={e} key={i}
            classN={bgColors[i]}
        />)
    })


    const [isDisabled, setDisability] = useState(false)

    function clickHandler() {
        setDisability(true)
        let oTimer = 1000 * array.length;

        for (let i = 0; i < array.length - 1; i++) {
            setTimeout(() => {
                for (let j = 0; j < array.length - i - 1; j++) {
                    setTimeout(() => {
                        let newBgColors = [...bgColors]
                        newBgColors[j] = 'styleOrangeBg'
                        newBgColors[j + 1] = 'styleOrangeBg'

                        setBgColors(newBgColors)

                        setData(data => {
                            // Copy the current array
                            const newData = [...data];
                            // Do the swap
                            swap(newData, j, j + 1)
                            // Set the state by returning the update
                            return newData
                        });

                        console.log(data)
                    }, 1000 * (j + 1));
                }
            }, oTimer * (i + 1));
        }

        // TODO: after execution of function setDisability to true
        // TODO: AFTER CLICKING BACK BUTTON STILL THE FUNCTION EXECUTES (stop it!)
    }

    function swap(newData, x, y) {
        if (newData[x] > newData[y]) {
            let t = newData[x]
            newData[x] = newData[y]
            newData[y] = t;
        }
    }

    function reset() {
        // temporary solution to stop execution of function
        window.location.reload(true);
    }

    return (
        <div>
            <div className='d-f j-c arrayBlocks-section font-roboto-mono' >
                {arrayBlocks}
            </div>
            <div className='operating-section'>
                <button id='vis' className='btn' onClick={clickHandler} disabled={isDisabled}>Start Visualizing</button>
                <button id='res' className='btn' onClick={reset}>Reset</button>
            </div>
        </div>

    )
}

export default Visualizer
