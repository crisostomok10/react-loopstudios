import React from 'react'
import './TwoPanel.scss'
import panelImage from '../../images/desktop/image-interactive.jpg'

function TwoPanel() {
    return (
        <div className="two-panel-container">
            <div className="two-panel-grid">
                <div className="two-panel-image">
                    <img src={panelImage} alt="Interactive-Image" />
                </div>
                <div className="two-panel-text">
                    <div className="two-panel-header">
                        THE LEADER IN INTERACTIVE VR
                    </div>
                    <div className="two-panel-sub-header">
                        Founded in 2011, Loopstudios has been producing world-class
                        virtual reality projects for some of the best companies around the 
                        globe. Our award-winning creations have transformed 
                        businesses through digital experieces that bind to their brand.
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TwoPanel
