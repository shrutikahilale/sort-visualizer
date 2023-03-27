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
            sc: 'O(1)'
        },
        {
            id: 2,
            title: 'SELECTION SORT',
            sort: 'selectionSort',
            tc: 'O(n2)',
            sc: 'O(1)'
        },
        {
            id: 3,
            title: 'INSERTION SORT',
            sort: 'insertionSort',
            tc: 'O(n2)',
            sc: 'O(1)'
        },
    ]
    const array = [9, 5, 1, 4, 3]

    const cards = cardInfo.map((e, i) => <Card key={e.id} title={e.title} array={array} sort={e.sort} tc={e.tc} sc={e.sc} />)

    return (
        <div>
            <h1>Sort Visualizer</h1>
            <div className='homepage'>{cards}</div>
        </div>
    )
}

export default HomePage
