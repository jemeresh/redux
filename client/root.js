import React from 'react'
import { Provider } from 'react-redux'
import store from './new_redux'
import Users from './myusers'


const Root = () => {
  return (
    <Provider store={store}>
      <Users/>
    </Provider>
  )
}

export default Root