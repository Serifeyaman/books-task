import React from 'react'
import MyRouter from './router/MyRouter'
import { Provider } from 'react-redux';
import store from 'redux/store';
const App = () => {
  return (
    <Provider store={store}>

      <MyRouter />
    </Provider>

  )
}

export default App