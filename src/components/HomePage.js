import React from 'react'
import Card from './Card.js'
import '../App.css';
import './style.css';

function HomePage() {
    const cardInfo = [
        {
            id: 1,
            title: 'BUBBLE SORT',
            sort: 'bubbleSort',
            tc: 'O(n2)',
            sc: 'O(1)',
            imgSrc: process.env.PUBLIC_URL + "imgs/bubble-sort.png",
            algorithm: 'Initialize i=0, j=i \n 1. Iterate till j<(size-1): \n  1.1 If arr[j]>arr[j+1] then swap [j] and arr[j+1] \n 1.2 j++ \n 2. i++ \n 3. Go to step 1 until i<size-1',
        },
        {
            id: 2,
            title: 'SELECTION SORT',
            sort: 'selectionSort',
            tc: 'O(n2)',
            sc: 'O(1)',
            imgSrc: process.env.PUBLIC_URL + "imgs/selection-sort.png",
            algorithm: '1. Set MIN to location 0 \n 2. Search the minimum element in the list \n 3. Swap with value at location MIN \n 4. Increment MIN to point to next element \n 5. Repeat until list is sorted',
        },
        {
            id: 3,
            title: 'INSERTION SORT',
            sort: 'insertionSort',
            tc: 'O(n2)',
            sc: 'O(1)',
            imgSrc: process.env.PUBLIC_URL + "imgs/insertion-sort.png",
            algorithm: '1. If it is the first element, it is already sorted. return 1; \n 2. Pick next element \n 3. Compare with all elements in the sorted sub-list \n 4. Shift all the elements in the sorted sub-list that is greater than the value to be sorted \n 5. Insert the value \n 6. Repeat until list is sorted',
        },
    ]
    const array = [9, 5, 1, 4, 3]

    const cards = cardInfo.map((e, i) => <Card key={e.id} title={e.title} array={array} sort={e.sort} tc={e.tc} sc={e.sc} algorithm={e.algorithm} imgSrc={e.imgSrc} />)

    return (
        <div>
            <h1>Sort Visualizer</h1>
            <div className='homepage'>{cards}</div>
        </div>
    )
}

export default HomePage
