import React from 'react'
import ArrayBlock from './ArrayBlock'
import '../App.css';
import './style.css'

function Visualizer(props) {
    const arrayElements = props.array.map((e, i) => <p key={i}>{e}</p>)
    const arrayBlocks = props.array.map((e, i) => <ArrayBlock element={e} />)

    return (
        <div>
            <h2>{props.heading}</h2>
            <div className='f-1_3rem'> size = {props.array.length}</div>
            <div className='f-col j-c a-c f-1_3rem'>
                <span>array = &nbsp;</span>
                <span className='f-col gap-1'> {arrayElements} </span>
            </div>
            <div className='f-col m-3'>{arrayBlocks}</div>
            <div className="button">
                <button id='vis-btn' className='btn'>VISUALIZE</button>
                <button id='reset-btn' className='btn'>RESET</button>
            </div>
        </div >
    )
}

export default Visualizer
