import React from 'react'

import '../../styles/about.scss'


export default ({ children }) => (
  <div className='about-container'>
    <div className="img-container">
        <img src="https://miro.medium.com/fit/c/256/256/0*Fce-h4hJxly2toCI." />
    </div>
    <div className="txt">
        <p>
            Welcome to my blog. I am Shadid, your friendly neighbourhood software craftsman.
            I love coffee, web technologies and learning new things. 
            I like to document things as I learn them and share them with others through my blog.
        </p>
    </div>
  </div>
)