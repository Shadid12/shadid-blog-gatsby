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
            // onClick={() => navigate(
            //     '/post')
            // }
            onClick={
                () => {
                    window.open(
                        'https://dev.to/shadid12',
                        '_blank' // <- This is what makes it open in a new window.
                    )
                }
            }
        >
            <Card 
                title='My Blog @ Dev.to' 
                sub='Read my short weekly blog at Dev.to'
                icon='dev'
            />
        </div>
        <div className="three"
            onClick={
                () => {
                    window.open(
                        'https://blog.soshace.com/how-to-architect-a-node-js-project-from-ground-up/',
                        '_blank' // <- This is what makes it open in a new window.
                    )
                }
            }
        >
            <Card 
                title='work @ Soshace' 
                sub='My featured articles @ Soshace.com'
                icon='soshace'
            />
        </div>
    </div>
    {children}
  </React.Fragment>
)