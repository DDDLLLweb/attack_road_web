import { all, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects'
import {principal,doLogin,doLoginOut,doGetMenu} from './app'
import { doCaptcha } from './login'
import { API_PRINCIPAL, DO_LOGIN, API_LOGINOUT, DO_GETMENU } from '../action/app'
import { DO_CAPTCHA } from '../action/login'
// 2. our watcher saga: spawn a new task on each ACTION
function* watchCreateLesson() {
    // takeEvery: 
    // listen for certain actions that are going to be dispatched and take them and run through our worker saga.
    yield takeEvery(API_PRINCIPAL, principal);
    yield takeEvery(DO_LOGIN, doLogin);
    yield takeEvery(API_LOGINOUT, doLoginOut);
    yield takeEvery(DO_GETMENU,doGetMenu);
    yield takeEvery(DO_CAPTCHA,doCaptcha);
}
  
function* rootSaga() {
    yield all(
        [
          fork(watchCreateLesson),
        ]
    )
}

export default rootSaga;