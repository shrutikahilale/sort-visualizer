import React from 'react'
import './style.css'
import { useNavigate, Route, Routes } from 'react-router-dom'
import Visualizer from './Visualizer'

function Card(props) {
    const navigate = useNavigate()
    const handleOnClick = () => navigate('Visualizer')

    return (
        <div className='card' onClick={handleOnClick}>
            <h3>{props.title}</h3>
            <img src={require('../imgs/bubble-sort.png')} alt="" />

            {/* <Routes>
                <Route path='Visualizer' element={<Visualizer heading={props.title} array={props.array} />} />
            </Routes> */}
        </div>
    )
}

export default Card
