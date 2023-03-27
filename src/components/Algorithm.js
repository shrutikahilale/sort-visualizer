import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

function Algorithm() {
    const navigate = useNavigate()
    const location = useLocation()

    const redirectBack = () => {
        navigate(-1)
    }

    const steps = location.state.algorithm.toString().split('\n')

    return (
        <div>
            <p onClick={redirectBack} className='backBtn'> ⬅️ Back to Home</p>
            <div className='algo'>
                <section>
                    <section>

                        <h2>Algorithm</h2>
                        {
                            steps.map((e, i) => {
                                return (<div key={i}>{e}</div>)
                            })
                        }
                    </section>
                    <section>
                        Time Complexity: {location.state.tc}
                    </section>
                    <section>
                        Space Complexity: {location.state.sc}
                    </section>
                </section>

                <section>
                    <h2>Example</h2>
                    <img src={location.state.imgSrc} />
                </section>

            </div>
        </div>
    )
}

export default Algorithm