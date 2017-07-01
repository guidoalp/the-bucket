import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Header from '../components/header'
import Main from '../components/main'
import defaultPage from '../hocs/defaultPage'
import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth'

const Index = ({ isAuthenticated, loggedUser }) => (
  <div>
    {!isAuthenticated && (
      <p>Please login or sign-up!</p>
    )}
    {isAuthenticated && (
      <div>
        <p>Welcome back, <strong> { loggedUser.name }</strong>!</p>
        <Main user={loggedUser}/>
      </div>
    )}
  </div>
)

Index.PropTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loggedUser: PropTypes.object.isRequired
}

export default defaultPage(Index)
