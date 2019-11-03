import React from 'react'
import './landing.scss'

// components
import Title from './title'
import Card from '../Card'


export default ({ children }) => (
  <React.Fragment>
    <div className="landing">
        <div className="one">
            <Title main="Shadid Haque"/>
        </div>
        <div className="two">
            <Card 
                title='Title' 
                sub='some subtitles'
                icon='protect'
            />
        </div>
        <div className="three">
            <Card 
                title='Title 2' 
                sub='some subtitles' 
                icon='camera'
            />
        </div>
        <div className="four">
            <Card 
                title='Title 3' 
                sub='some subtitles' 
                icon='tut'
            />
        </div>
        <div className="five">
            <Card 
                title='Title 4' 
                sub='some subtitles' 
                icon='anon'
            />
        </div>
    </div>
    {children}
  </React.Fragment>
)