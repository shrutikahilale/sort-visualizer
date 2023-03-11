import React from 'react'
import Visualizer from './Visualizer';
import { useLocation, useNavigate } from "react-router-dom";

function SortPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const array = location.state.array;
    const size = array.length
    console.log(array)

    const arr = array.map((e, i) => {
        return (i === size - 1 ?
            <span key={i}> {e} </span> :
            <span key={i}> {e} ,</span>)
    })

    const redirectBack = () => {
        navigate("/");
    };

    return (

        <div className='d-f f-c g-2 j-c visualize-section'>
            <button onClick={redirectBack}>Back to Home</button>
            <header>{location.state.title}</header>
            <div>
                <div>size = {size}</div>
                <div >array = &#123;{arr}&#125;</div>
            </div>

            <Visualizer array={array} />
        </div >

    )
}

export default SortPage
