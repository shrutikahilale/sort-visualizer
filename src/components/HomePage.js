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
            algorithm: 'Initialize i=0, j=i \n 1. Iterate till j<(size-1): \n  1.1 If arr[j]>arr[j+1] then swap [j] and arr[j+1] \n 1.2 j++ \n 2. i++ \n 3. Go to step 1 until i<size-1',
        },
        {
            id: 3,
            title: 'INSERTION SORT',
            sort: 'insertionSort',
            tc: 'O(n2)',
            sc: 'O(1)',
            imgSrc: process.env.PUBLIC_URL + "imgs/insertion-sort.png",
            algorithm: 'Initialize i=0, j=i \n 1. Iterate till j<(size-1): \n  1.1 If arr[j]>arr[j+1] then swap [j] and arr[j+1] \n 1.2 j++ \n 2. i++ \n 3. Go to step 1 until i<size-1',
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
