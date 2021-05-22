import { call, put, takeEvery } from 'redux-saga/effects'
import {apiProvider} from 'api/provider'
import {FETCH_PERSON, FETCH_PERSON_SUCCEEDED, FETCH_PERSON_FAILED} from 'modules/people/actions'

function* fetchPerson(action) {
   try {
      const person = yield call(apiProvider.fetchPerson, action.payload);
      yield put({type: FETCH_PERSON_SUCCEEDED, payload: person});
   } catch (e) {
      yield put({type: FETCH_PERSON_FAILED, payload: e});
   }
}

export function* personSaga() {
    yield takeEvery(FETCH_PERSON, fetchPerson);
  }
  
