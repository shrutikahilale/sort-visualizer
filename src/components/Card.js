import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function Card(props) {
    const navigate = useNavigate()
    const handleOnClick = () => navigate('SortPage', {
        state: {
            title: props.title, array: props.array
        }
    })

    return (
        <div className='card' onClick={handleOnClick}>
            <h3>{props.title}</h3>
            <img src={require('../imgs/bubble-sort.png')} alt="" />
        </div>
    )
}

export default Card
