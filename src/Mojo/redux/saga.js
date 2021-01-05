import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import actions from './action'
import callApi from './callApi'

export function * getViewData () {
   yield takeEvery('GET_DATA_LIST', function * (payload) {
     try {
       let res = yield call(callApi.getViewData, payload)
       if (res.status === 200) {
         console.log(res.data, 'PAYLOAD');
         yield put({
           type: actions.DATA_LIST,
           data: res.data,
           message: 'success'
         })
       } else {
         yield put({ type: actions.DATA_LIST, data: [res.data], message: 'failed' })
       }
     } catch (error) {
       yield put({ type: actions.DATA_LIST, data: [] })
     }
   })
 }

 export default function * rootSaga () {
   yield all([
    fork(getViewData)
   ])
 }