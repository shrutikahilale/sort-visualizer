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
    const [arrayData, setArrayData] = useState(array)
    const [isDisabled, setDisability] = useState(false)

    const arrayBlocks = arrayData.map((e, i) => {
        return (<ArrayBlock element={e} key={i} classN={bgColors[i]} />)
    })

    let endTimer

    function bubbleSortVisualizer() {
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

    // Selection sort functions

    const ss_changeColor = (j, i) => {
        return new Promise(resolve => {
            setTimeout(() => {
                // change color
                setBgColors(bgColors => {
                    const newBgColors = [...bgColors]
                    for (let k = i + 1; k < n; k++)
                        newBgColors[k] = 'styleBlueBg'
                    newBgColors[j] = 'styleOrangeBg'
                    return newBgColors
                })
                resolve(j)
            }, 2000)
        })
    }

    const ss_changeDataAndColor = (idx, i) => {
        return new Promise(resolve => {
            setTimeout(() => {
                // update data
                let temp = array[idx]
                array[idx] = array[i]
                array[i] = temp

                // ** By uncommenting the below lines, it will re-swap the numbers 
                // ** Thus no change will be seen
                // setArrayData(arrayData => {
                //     const newData = [...arrayData]
                //     let temp = newData[idx]
                //     newData[idx] = newData[i]
                //     newData[i] = temp
                //     return newData
                // })

                setBgColors(bgColors => {
                    const newBgColors = [...bgColors]
                    newBgColors[n - 1] = 'styleBlueBg'
                    newBgColors[i] = 'styleGreenBg'
                    return newBgColors
                })

                resolve(i)
            }, 2000)
        })
    }

    const selectionSort = async () => {
        for (let i = 0; i < n; i++) {
            let idx = i

            for (let j = i + 1; j < n; j++) {
                // keep track of smallest element's index
                if (array[j] < array[idx]) idx = j

                // change color 
                await ss_changeColor(j, i)
            }

            // change data
            await ss_changeDataAndColor(idx, i)
            // console.log(i, '', idx, array)
        }
    }

    // Insertion Sort functions

    const is_checkAndSwap = (j) => {
        return new Promise(resolve => {
            setTimeout(() => {
                array[j + 1] = array[j]

                setArrayData(arrayData => {
                    const newData = [...arrayData]
                    newData[j + 1] = newData[j]
                    return newData
                })

                setBgColors(bgColors => {
                    const newBgColors = [...bgColors]
                    newBgColors[j + 1] = 'styleOrangeBg'
                    return newBgColors
                })

                resolve(j)
            }, 2000);
        })
    }

    const is_changeDataAndColor = (j, i, key) => {
        return new Promise(resolve => {
            setTimeout(() => {
                array[j + 1] = key

                setArrayData(arrayData => {
                    const newData = [...arrayData]
                    newData[j + 1] = key
                    return newData
                })

                setBgColors(bgColors => {
                    const newBgColors = [...bgColors]
                    for (let k = 0; k <= i; k++) {
                        newBgColors[k] = 'styleGreenBg'
                    }
                    for (let k = i + 1; k < n; k++) {
                        newBgColors[k] = 'styleBlueBg'
                    }
                    return newBgColors
                })
                resolve(j)
            }, 2000)

        })
    }

    const insertionSort = async () => {
        for (let i = 1; i < n; i++) {
            let key = array[i]

            let j = i - 1

            while (j >= 0 && key < array[j]) {
                await is_checkAndSwap(j)
                // console.log(j, array)
                j--
            }

            await is_changeDataAndColor(j, i, key)
        }

    }

    // Reset function

    function reset() {
        setBgColors(bgColors => {
            const newBgColors = [...bgColors]
            for (let k = 0; k < newBgColors.length; k++) newBgColors[k] = 'styleBlueBg'
            return newBgColors
        })

        setArrayData(arrayData => {
            array = [9, 5, 1, 4, 3]
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
                            setDisability(true)
                            switch (sort) {
                                case 'bubbleSort':
                                    bubbleSortVisualizer()
                                    break;
                                case 'selectionSort':
                                    selectionSort()
                                    break;
                                case 'insertionSort':
                                    insertionSort()
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
