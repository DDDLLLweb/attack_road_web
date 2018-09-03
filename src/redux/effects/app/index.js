import { call, put, takeEvery } from 'redux-saga/effects'
import { API_PRINCIPAL,STATE_PRINCIPAL, DO_LOGIN, API_LOGINOUT, DO_GETMENU,STATE_MENU} from '../../action/app'
import * as appService from '../../../service/app/app'
import { push } from 'react-router-redux'
import { message } from 'antd'

export function* principal() {
  const data = yield call(appService.getPrincipal);
  if (data.success && data.data) {
        yield put({
          type: STATE_PRINCIPAL,
          payload: { user: data.data },
        });
  } else {
    yield put(push('/login'));
  }
}
export function* doLogin({payload}) {
    const data = yield call(appService.login,payload);
    if(data.success) {
      yield put(push('/'));
    } else {
      message.warning(data.message,3);
    }
}

export function* doLoginOut() {
  const data = yield call(appService.loginOut);
    if(data.success) {
      yield put(push('/login'));
    }
}
// export function* doGetMenu() {
//   const data = yield call(appService.getMenuItem);
//     if(data.success) {
//       console.log(data);
//     }
// }
export function* doGetMenu() {
  const data = yield call(appService.getMenuItem);
    if(data.success) {
      yield put({
        type: STATE_MENU ,
        payload: { menu: data.data },
      });
    }
}
// 2. our watcher saga: spawn a new task on each ACTION
export function* watchCreateLesson() {
  // takeEvery: 
  // listen for certain actions that are going to be dispatched and take them and run through our worker saga.
  yield takeEvery(API_PRINCIPAL, principal);
  yield takeEvery(DO_LOGIN, doLogin);
  yield takeEvery(API_LOGINOUT, doLoginOut);
  yield takeEvery(DO_GETMENU,doGetMenu);
}
