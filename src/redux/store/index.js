import { createStore, applyMiddleware, compose } from 'redux'
import postApp from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'





const initStore = () => {
  const middlewares = [thunk]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  const store = createStore(
    postApp, 
    composeEnhancers(applyMiddleware(...middlewares))
    )

  return store
  }

export default initStore