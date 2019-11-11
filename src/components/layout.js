import React from 'react'
import Nav from './Nav'

import '../styles/layout.scss'


export default ({ children }) => (
  <React.Fragment>
    <Nav />
    {children}
  </React.Fragment>
)