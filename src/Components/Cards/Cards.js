import React from 'react'
import './Cards.scss'

function Cards() {
    return (
        <div className="cards-container">
            <div className="cards-header-container">
                <div className="cards-header-text">OUR CREATIONS</div>
                <button className="cards-header-btn">SEE ALL</button>
            
            {/* <div className="cards-header-text">OUR CREATIONS</div>
            <button className="cards-header-btn">SEE ALL</button> */}

            <div className="cards-grid">
                <div className="card-wrap deep-earth">
                    <div className="card-label">DEEP<br></br>EARTH</div>
                </div>
                <div className="card-wrap night-arcade">
                    <div className="card-label">NIGHT<br></br>ARCADE</div>
                </div>
                <div className="card-wrap soccer-team">
                    <div className="card-label">SOCCER<br></br>TEAM VR</div>
                </div>
                <div className="card-wrap the-grid">
                    <div className="card-label">THE<br></br>GRID</div>
                </div>
                <div className="card-wrap up-above">
                    <div className="card-label">FROM UP<br></br>ABOVE VR</div>
                </div>
                <div className="card-wrap borealis">
                    <div className="card-label">POCKET<br></br>BOREALIS</div>
                </div>
                <div className="card-wrap curiosity">
                    <div className="card-label">THE<br></br>CURIOSITY</div>
                </div>
                <div className="card-wrap fisheye">
                    <div className="card-label">MAKE IT<br></br>FISHEYE</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cards
