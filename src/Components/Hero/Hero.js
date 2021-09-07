import React from 'react'
import './Hero.scss'
import Navbar from '../Navbar/Navbar'

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-wrap">
                <Navbar />
                <div className="hero-header-wrap">
                    <div className="hero-header">
                        IMMERSIVE
                        EXPERIENCES
                        THAT DELIVER
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
