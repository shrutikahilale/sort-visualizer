import React, { useState } from 'react'
import '../App.css'
import ArrayBlock from './ArrayBlock'

function Visualizer({ array, sort }) {
    const n = array.length
    let classNameArray = []
    for (let i = 0; i < n; i++) {
        classNameArray[i] = 'styleBlueBg'
    }

    const [bgColors, setBgColors] = useState(classNameArray)
    const [arrayData, setArrayData] = useState([26, 14, 45, 67, 28, 18])
    const [isDisabled, setDisability] = useState(false)

    const arrayBlocks = arrayData.map((e, i) => {
        return (<ArrayBlock element={e} key={i} classN={bgColors[i]} />)
    })

    let endTimer

    function bubbleSortVisualizer() {
        setDisability(true)
        let oTimer = 1000 * n
        endTimer = 28000

        for (let i = 0; i < n - 1; i++) {
            setTimeout(() => {
                for (let j = 0; j < n - i - 1; j++) {
                    setTimeout(() => {
                        setBgColors((bgColors) => {
                            const newBgColors = [...bgColors]
                            for (let k = 0; k < newBgColors.length - i; k++)
                                newBgColors[k] = 'styleBlueBg'
                            newBgColors[j] = i === n - 2 ? 'styleGreenBg' : 'styleOrangeBg'
                            newBgColors[j + 1] = j === n - i - 2 ? 'styleGreenBg' : 'styleOrangeBg'
                            return newBgColors
                        })

                        setArrayData((arrayData) => {
                            // Copy the current array
                            const newData = [...arrayData]
                            // Do the swap
                            if (newData[j] > newData[j + 1]) {
                                let t = newData[j]
                                newData[j] = newData[j + 1]
                                newData[j + 1] = t
                            }
                            // Set the state by returning the update
                            return newData
                        })


                    }, 1000 * (j))

                }
            }, oTimer * (i))
        }

        setTimeout(() => { setDisability(false) }, endTimer)
    }

    function selectionSortVisualizer() {
        endTimer = 30000

        for (let i = 0; i <= n - 2; i++) {
            let minIdx

            setTimeout(
                () => {
                    minIdx = i

                    for (let j = i + 1; j <= n - 1; j++) {
                        setTimeout(() => {
                            setBgColors(bgColors => {
                                const newBgColors = [...bgColors]
                                for (let k = i + 1; k < n; k++)
                                    newBgColors[k] = 'styleBlueBg'
                                newBgColors[j] = 'styleOrangeBg'
                                return newBgColors
                            })

                            if (array[j] < array[minIdx]) {
                                minIdx = j
                            }
                        }, 1000 * j);
                    }
                }, 6000 * i);

            setTimeout(
                () => {
                    setArrayData((arrayData) => {
                        // Copy the current array
                        const newData = [...arrayData]
                        // Do the swap

                        let t = newData[i]
                        newData[i] = newData[minIdx]
                        newData[minIdx] = t

                        // Set the state by returning the update
                        return newData
                    })

                    let t = array[i]
                    array[i] = array[minIdx]
                    array[minIdx] = t

                    // change the color of starting block
                    setBgColors(bgColors => {
                        const newBgColors = [...bgColors]
                        newBgColors[i] = 'styleGreenBg'
                        newBgColors[n - 1] = 'styleBlueBg'
                        return newBgColors
                    })
                }, 6000 * (i + 1));
        }

        setTimeout(() => { setDisability(false) }, endTimer)
    }

    function insertionSortVisualizer() {
        console.log('insertionSortVisualizer')
    }

    function reset() {
        resetPage()
    }

    function resetPage() {
        setBgColors(bgColors => {
            const newBgColors = [...bgColors]
            for (let k = 0; k < newBgColors.length; k++) newBgColors[k] = 'styleBlueBg'
            return newBgColors
        })

        setArrayData(arrayData => {
            return array
        })

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
