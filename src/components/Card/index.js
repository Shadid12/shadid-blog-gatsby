import React from 'react'

import './card.scss';
import proptect from './assets/protect.svg'
import camera from './assets/camera.svg'
import anon from './assets/anon.svg'
import tut from './assets/tut.svg'

export default  (props) => {
    const {title, btnTitle, sub, icon} = props
    let propIcon = null
    if(icon && icon === 'protect') {
        propIcon = proptect
    } 
    if(icon && icon === 'camera') {
        propIcon = camera
    } 
    if(icon && icon === 'anon') {
        propIcon = anon
    } 
    if(icon && icon === 'tut') {
        propIcon = tut
    } 
    return (
        <div className="card-component">
            <h3>{title}</h3>
            {icon ?
                (
                    <img src={propIcon}/>
                ) : null
            }
            <p>{sub}</p>
        </div>
    )
}