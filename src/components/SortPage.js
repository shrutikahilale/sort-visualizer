import React from 'react'
import Visualizer from './Visualizer';
import { useLocation, useNavigate } from "react-router-dom";
import './style.css'

function SortPage() {
    const navigate = useNavigate()
    const location = useLocation()

    const array = location.state.array
    const size = array.length
    const sort = location.state.sort

    const arr = array.map((e, i) => {
        return (i === size - 1 ?
            <span key={i}> {e} </span> :
            <span key={i}> {e} ,</span>)
    })

    const redirectBack = () => {
        navigate(-1)
    }

    return (

        <div className='d-f f-c g-2 j-c sort-page-section'>
            <p onClick={redirectBack} className='backBtn'> ⬅️ Back to Home</p>

            <header className='sort-name'>{location.state.title}</header>

            <div>
                <div>size = {size}</div>
                <div>array = &#123;{arr}&#125;</div>
            </div>

            <Visualizer array={array} sort={sort} />
        </div >

    )
}

export default SortPage
