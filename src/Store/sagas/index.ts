import { all, call } from 'redux-saga/effects';

import saga from './saga';

function* rootSaga() {
  yield all([call(saga)]);
}

export default rootSaga;
