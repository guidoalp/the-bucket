import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Header from '../components/header.js'
import defaultPage from '../hocs/defaultPage'
import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth'

const getUser = () => (
  getUserFromLocalStorage().name
)

const Index = ({ isAuthenticated }) => (
  <div>
    {!isAuthenticated && (
      <p>Please login or sign-up!</p>
    )}
    {isAuthenticated && (
      <p>Welcome back, <strong>{ getUser() }</strong>!</p>
    )}
  </div>
)

Index.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default defaultPage(Index)
