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
                j--
            }
            await is_changeDataAndColor(j, i, key)
        }

    }

    // quick sort

    const qs_changeColor = (pidx) => {
        return new Promise(resolve => {
            setTimeout(() => {
                setBgColors(bgColors => {
                    const newBgColors = [...bgColors]
                    newBgColors[pidx] = 'styleRedBg'
                    return newBgColors
                })
                resolve(pidx)
            }, 2000);
        })
    }

    const qs_swap = async (j, low, high) => {
        return new Promise(resolve => {
            setTimeout(() => {
                setBgColors(bgColors => {
                    const newBgColors = [...bgColors]
                    for (let k = low; k < high; k++) newBgColors[k] = 'styleBlueBg'
                    newBgColors[j] = 'styleYellowBg'
                    return newBgColors
                })
                resolve(j)
            }, 2000);
        })
    }
    const qs_swapAndChangeColor = async (i, j, low, high) => {
        return new Promise(resolve => {
            setTimeout(() => {
                setBgColors(bgColors => {
                    const newBgColors = [...bgColors]
                    for (let k = low; k < high; k++) newBgColors[k] = 'styleBlueBg'
                    newBgColors[j] = 'stylePurpleBg'
                    newBgColors[i] = 'stylePurpleBg'
                    return newBgColors
                })
                resolve(i, j)
            }, 2000);
        })
    }
    const qs_resetColors = (low, high, i) => {
        return new Promise(resolve => {
            setTimeout(() => {
                setBgColors(bgColors => {
                    const newBgColors = [...bgColors]
                    for (let k = low; k <= high; k++) newBgColors[k] = 'styleBlueBg'
                    newBgColors[i] = 'styleGreenBg'
                    return newBgColors
                })
                resolve(i)
            }, 2000);
        })
    }

    const [[qs_startIdx, qs_endIdx, qs_pivot], setQSIdx] = useState([0, 0, 0])

    const partition = async (low, high) => {
        let pivot = array[high]
        setQSIdx([low, high, pivot])

        await qs_changeColor(high)

        let i = low - 1
        for (let j = low; j < high; j++) {
            await qs_swap(j, low, high)

            if (array[j] < pivot) {
                i++;
                await qs_swapAndChangeColor(i, j, low, high)
                let t = array[j]
                array[j] = array[i]
                array[i] = t
            }
        }

        i++;
        await qs_swapAndChangeColor(i, high, low, high)
        let t = array[i]
        array[i] = array[high]
        array[high] = t

        await qs_resetColors(low, high, i)

        return i
    }
    const [qs_invoked, setQSState] = useState(false)

    const quickSort = async (low, high) => {
        if (low <= high) {
            let pIdx = await partition(low, high)
            await quickSort(low, pIdx - 1)
            await quickSort(pIdx + 1, high)
        }
    }

    // merge sort
    const colors = ['styleIndigoBg', 'styleOrangeBg', 'stylePurpleBg', 'styleRedBg', 'styleYellowBg', 'stylePinkBg']

    const ms_changeBgColor = (c_idx, st, end) => {
        return new Promise(resolve => {
            setTimeout(() => {
                setBgColors(bgColors => {
                    const newBgColors = [...bgColors]
                    for (let x = st; x <= end; x++) newBgColors[x] = colors[c_idx]
                    return newBgColors
                })
                resolve(st, end)
            }, 1500);
        })
    }
    const divide = async (st, end, mid) => {
        if (st == mid || end == mid) return

        // idx of color from colors array
        let c_idx1 = parseInt((end - mid) % (colors.length - 1))
        let c_idx2 = parseInt((mid - st) % (colors.length - 1))

        // color change in half by half
        await ms_changeBgColor(c_idx1, st, mid)
        await ms_changeBgColor(c_idx2, mid + 1, end)
    }

    const mergeSort = async (st, end) => {
        if (st < end) {
            let mid = parseInt(st + (end - st) / 2)

            await divide(st, end, mid)
            await mergeSort(st, mid)
            await mergeSort(mid + 1, end)
        }
    }

    const [[ms_startIdx, ms_endIdx], setMSIdx] = useState([0, 0])

    const ms_sort = async (st, end) => {
        return new Promise(resolve => {
            setTimeout(() => {
                setMSIdx([st, end])

                setArrayData(arrayData => {
                    const newData = [...arrayData]
                    const part = newData.splice(st, end - st + 1);
                    part.sort()
                    newData.splice(st, 0, ...part)
                    return newData
                })

                setBgColors(bgColors => {
                    const newBgColors = [...bgColors]
                    for (let i = st; i <= end; i++) {
                        newBgColors[i] = 'styleGreenBg'
                    }
                    return newBgColors
                })

                resolve(st, end)
            }, 2000);
        })
    }

    const conquer = async (st, end) => {
        if (st < end) {
            let mid = parseInt(st + (end - st) / 2)
            await conquer(st, mid)
            await conquer(mid + 1, end)
            await ms_sort(st, end);
        }

    }

    const [ms_invoked, setMSState] = useState(false)

    const merge = async (st, end) => {
        await mergeSort(st, end);
        // create and display element for st and end index of merge sort while actually sorting 
        setMSState(true)
        await conquer(st, end);
    }

    // Reset function
    function reset() {
        setMSState(false)
        setQSState(false)
        setMSIdx([0, 0])
        setQSIdx([0, 0, 0])

        setDisability(false)

        setBgColors(bgColors => {
            const newBgColors = [...bgColors]
            for (let k = 0; k < newBgColors.length; k++) newBgColors[k] = 'styleBlueBg'
            return newBgColors
        })

        setArrayData(arrayData => {
            array = [25, 10, 15, 34, 56, 82, 18, 70]
            return array
        })
    }

    return (
        <div>
            {/* st and end index to be displayed while sorting for merge sort*/}
            {
                ms_invoked && <div><div>Start idx : {ms_startIdx} </div>
                    <div>End idx : {ms_endIdx}</div></div>
            }
            {/* st, end index and pivot to be displayed while sorting for quick sort*/}
            {
                qs_invoked && <div><div>Start idx : {qs_startIdx} </div>
                    <div>End idx : {qs_endIdx}</div><div>Pivot : {qs_pivot}</div></div>
            }
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
                                    break
                                case 'selectionSort':
                                    selectionSort()
                                    break
                                case 'insertionSort':
                                    insertionSort()
                                    break
                                case 'quickSort':
                                    setQSState(true)
                                    quickSort(0, n - 1)
                                    break
                                case 'mergeSort':
                                    merge(0, n - 1)
                                    break
                                default:
                                    console.log('err')
                                    break
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
