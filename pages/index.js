import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

import Header from '../components/header'
import Main from '../components/main'
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
      <div>
        <p>Welcome back, <strong>{ getUser() }</strong>!</p>
        <Main />
      </div>
    )}
  </div>
)

export default defaultPage(Index)
