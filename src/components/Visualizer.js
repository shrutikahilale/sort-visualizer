import React, { Component } from 'react'
import ArrayBlock from './ArrayBlock'
import '../App.css';
import './style.css'

class Visualizer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>{this.props.heading}</h2>

                <div className='f-1_3rem'> size = {this.props.array.length}</div>

                <div className='f-col j-c a-c f-1_3rem'>
                    <span>array = &nbsp;</span>
                    <span className='f-col gap-1'> {this.props.array.map((e, i) => <p key={i}> {e} </p>)} </span>
                </div>

                <div className='f-col m-3' id='ArrayBlock'>
                    {this.props.array.map((e, i) => <ArrayBlock key={i} element={e} />)}
                </div>

                <div className="button">
                    <button id='vis-btn' className='btn'>VISUALIZE</button>
                    <button id='reset-btn' className='btn'>RESET</button>
                </div>

            </div>
        )
    }
}

export default Visualizer
