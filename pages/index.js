import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from '../components/header.js'
import defaultPage from '../hocs/defaultPage'

const Index = () => (
  <div>
    <h1>Please login or sign-up!</h1>
  </div>
)

export default defaultPage(Index)
