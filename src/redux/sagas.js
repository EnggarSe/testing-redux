import { all } from 'redux-saga/effects'

import ViewSaga from '../Mojo/redux/saga'

export default function * useSaga () {
   yield all([
      ViewSaga()
   ])
 }