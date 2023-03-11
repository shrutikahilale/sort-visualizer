import React from 'react'
import Card from './Card.js'
import '../App.css';
import './style.css';

function HomePage() {
    const cardInfo = [
        {
            id: 1,
            title: 'BUBBLE SORT',
            imgSrc: '../imgs/bubble-sort.png'
        },
        {
            id: 2,
            title: 'SELECTION SORT',
            imgSrc: '../imgs/bubble-sort.png'
        },
        {
            id: 3,
            title: 'INSERTION SORT',
            imgSrc: '../imgs/bubble-sort.png'
        },
    ]
    const array = [23, 14, 45, 67, 28, 18]

    const cards = cardInfo.map((e, i) => <Card key={e.id} title={e.title} imgSrc={e.imgSrc} array={array} />)

    return (
        <div className='homepage'>{cards}</div>
    )
}

export default HomePage
