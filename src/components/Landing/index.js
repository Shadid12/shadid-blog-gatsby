import React from 'react'
import './landing.scss'

// components
import Title from './title';


export default ({ children }) => (
  <React.Fragment>
    <div className="landing">
        <div className="one">
            <Title main="Shadid Haque"/>
        </div>
        <div className="two">
        </div>
        <div className="three">
        </div>
        <div className="four">
        </div>
        <div className="five">
        </div>
    </div>
    {children}
  </React.Fragment>
)