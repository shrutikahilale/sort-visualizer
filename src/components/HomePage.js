import React from 'react'
import Card from './Card.js'
import '../App.css';
import './style.css';

function HomePage() {
    const cardInfo = [
        {
            id: 1,
            title: 'BUBBLE SORT',
            imgSrc: '../imgs/bubble-sort.png',
            sort: 'bubbleSort'
        },
        {
            id: 2,
            title: 'SELECTION SORT',
            imgSrc: '../imgs/bubble-sort.png',
            sort: 'selectionSort'
        },
        {
            id: 3,
            title: 'INSERTION SORT',
            imgSrc: '../imgs/bubble-sort.png',
            sort: 'insertionSort'
        },
    ]
    const array = [9, 5, 1, 4, 3]

    const cards = cardInfo.map((e, i) => <Card key={e.id} title={e.title} imgSrc={e.imgSrc} array={array} sort={e.sort} />)

    return (
        <div className='homepage'>{cards}</div>
    )
}

export default HomePage
