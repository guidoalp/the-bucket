import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from '../components/header.js'
import Main from '../components/main'
import defaultPage from '../hocs/defaultPage'

const Ideas = () => (
  <div>
    <Main />
  </div>
)

export default defaultPage(Ideas)
