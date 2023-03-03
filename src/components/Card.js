import React from 'react'
import './style.css'

function Card(props) {
    return (
        <div className='card' >
            <h3>{props.title}</h3>
            <img src={require('../imgs/bubble-sort.png')} alt="" />
        </div>
    )
}

export default Card
