import { watchCreateLesson } from './app'
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
    yield all(
        [
          fork(watchCreateLesson),
        ]
    )
}

export default rootSaga;