import React from 'react'
import './lamnding.scss'


export default ({ children }) => (
  <React.Fragment>
    <div className="landing">
        <div className="one">
            One
        </div>
        <div className="two">
            <div className="child"></div>
        </div>
        <div className="three">
            <div className="child"></div>
        </div>
        <div className="four">
            <div className="child"></div>
        </div>
        <div className="five">
            <div className="child"></div>
        </div>
    </div>
    {children}
  </React.Fragment>
)