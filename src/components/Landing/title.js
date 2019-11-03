import React from 'react'
import './title.scss'

export default ({children, main}) => {
    return(
        <div className="title-component">
            <h1>
                {main}
            </h1>
            {children}
        </div>
    )
}