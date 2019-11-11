import React from 'react'
import { navigate } from "gatsby"
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
        <div 
            className="two" 
            onClick={() => navigate(
                '/post')
            }
        >
            <Card 
                title='Advanced React Component Patterns' 
                sub='Learn about design patterns to write clean scalable code in React'
                icon='atom'
            />
        </div>
        <div className="three">
            <Card 
                title='Building an one man Startup in 3 months' 
                sub='My journey of taking an idea to reality and how I got 
                        my heart broken on the process'
                icon='camera'
            />
        </div>
        <div className="four">
            <Card 
                title='Why every developer should think like entrepeneurs' 
                sub='A handbook to navigate your way through a software development career like a rock star' 
                icon='tut'
            />
        </div>
        <div className="five">
            <Card 
                title='The Blog' 
                sub='Short form thoughts' 
                icon='anon'
            />
        </div>
    </div>
    {children}
  </React.Fragment>
)