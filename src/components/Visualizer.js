import React, { useRef, useState } from 'react'
import '../App.css'
import ArrayBlock from './ArrayBlock'

function Visualizer({ array, sort }) {
    let classNameArray = []
    for (let i = 0; i < array.length; i++) {
        classNameArray[i] = 'styleBlueBg'
    }

    const [bgColors, setBgColors] = useState(classNameArray)
    const [data, setData] = useState(array)
    const [isDisabled, setDisability] = useState(false)
    // const [isTerminated, setTermination] = useState(false)
    const isTerminated = useRef(false)

    const arrayBlocks = data.map((e, i) => {
        return (<ArrayBlock element={e} key={i}
            classN={bgColors[i]}
        />)
    })

    var timer1, timer2

    function bubbleSortVisualizer() {
        setDisability(true)
        let oTimer = 1000 * array.length
        let endTimer = 28000

        for (let i = 0; i < array.length - 1; i++) {
            timer1 = setTimeout(() => {
                for (let j = 0; j < array.length - i - 1; j++) {
                    timer2 = setTimeout(() => {
                        setBgColors((bgColors) => {
                            const newBgColors = [...bgColors]

                            for (let k = 0; k < newBgColors.length - i; k++)
                                newBgColors[k] = 'styleBlueBg'

                            newBgColors[j] = i === array.length - 2 ? 'styleGreenBg' : 'styleOrangeBg'
                            newBgColors[j + 1] = j === array.length - i - 2 ? 'styleGreenBg' : 'styleOrangeBg'

                            return newBgColors
                        })

                        setData(data => {
                            // Copy the current array
                            const newData = [...data]
                            // Do the swap
                            swap(newData, j, j + 1)
                            // Set the state by returning the update
                            return newData
                        })
                        // console.log('timer2: ', timer2)
                    }, 1000 * (j))
                }

                console.log('timer1: ', timer1)
            }, oTimer * (i))
        }
        setTimeout(() => {
            setDisability(false)
            resetPage()
        }, endTimer)

        // if(isTerminated.current) {
        //     console.log('yes')
        //     // clearTimeout(timer2)
        //     // clearTimeout(timer1)
        // }
    }


    function swap(newData, x, y) {
        if (newData[x] > newData[y]) {
            let t = newData[x]
            newData[x] = newData[y]
            newData[y] = t
        }
    }

    function reset() {
        // // stop the function that is executing
        // setTermination(true)
        // isTerminated.current = true
        resetPage()
    }

    function resetPage() {
        setBgColors(bgColors => {
            const newBgColors = [...bgColors]
            for (let k = 0; k < newBgColors.length; k++) newBgColors[k] = 'styleBlueBg'
            return newBgColors
        })

        setData(data => {
            return array
        })
    }

    function selectionSortVisualizer() {
        console.log('selectionSortVisualizer')
    }
    function insertionSortVisualizer() {
        console.log('insertionSortVisualizer')
    }

    return (
        <div>
            <div className='d-f j-c arrayBlocks-section font-roboto-mono' >
                {arrayBlocks}
            </div>
            <div className='operating-section'>
                <button id='vis' className='btn'
                    onClick={
                        () => {
                            switch (sort) {
                                case 'bubbleSort':
                                    bubbleSortVisualizer()
                                    break;
                                case 'selectionSort':
                                    selectionSortVisualizer()
                                    break;
                                case 'insertionSort':
                                    insertionSortVisualizer()
                                    break;
                                default:
                                    console.log('err')
                                    break;
                            }
                        }
                    }
                    disabled={isDisabled}>Start Visualizing</button>
                <button id='res' className='btn' onClick={reset}>Reset</button>
            </div>
        </div>

    )
}

export default Visualizer
