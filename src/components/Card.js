import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function Card(props) {
    const navigate = useNavigate()
    const handleOnClick = () => navigate('SortPage', {
        state: {
            title: props.title,
            array: props.array,
            sort: props.sort
        }
    })

<<<<<<< HEAD
<<<<<<< HEAD
    const navigateToAlgorithm = () => navigate('Algorithm', {
        state: {
            algorithm: props.algorithm,
            imgSrc: props.imgSrc,
            tc: props.tc,
            sc: props.sc,
        }
    })

=======
>>>>>>> parent of 730e15f (Implement algorithm.js)
=======
>>>>>>> parent of 730e15f (Implement algorithm.js)
    return (
        <div className='card' onClick={handleOnClick}>
            <h3>{props.title}</h3>
            <div>Worst case Time complexity: {props.tc}</div>
            <div>Space complexity: {props.sc}</div>
            <div id='algorithm'>Algorithm</div>
        </div>
    )
}

export default Card
