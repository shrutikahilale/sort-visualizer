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

    const navigateToAlgorithm = () => navigate('Algorithm', {
        state: {
            algorithm: props.algorithm,
            imgSrc: props.imgSrc,
            tc: props.tc,
            sc: props.sc,
        }
    })

    return (
        <div className='card'>
            <div onClick={handleOnClick}>
                <h3>{props.title}</h3>
                <div>Worst case Time complexity: {props.tc}</div>
                <div>Space complexity: {props.sc}</div>
            </div>
            <div id='algorithm' onClick={navigateToAlgorithm}>Algorithm</div>
        </div>
    )
}

export default Card
