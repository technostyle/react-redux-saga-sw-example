import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import {personSaga} from 'sagas/people-saga'
import {peopleReducer} from 'modules/people/reducer'

const logger = ({ getState }) => (next) => (action) => {
    const { type, payload } = action;
    console.info(
      `%c${type}`,
      "font-style: bold; color: blue",
      { payload },
      getState()
    );
    return next(action);
  };  

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    people: peopleReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(personSaga)