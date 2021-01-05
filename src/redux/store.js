import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from '../redux/reducer'
import rootSaga from '../redux/sagas'


const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunk, sagaMiddleware, routerMiddleware]

const store = createStore(
   combineReducers({
      ...reducers,
   }),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export {store}