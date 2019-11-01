import React from 'react'
import Nav from './Nav'


export default ({ children }) => (
  <React.Fragment>
    <Nav />
    {children}
  </React.Fragment>
)