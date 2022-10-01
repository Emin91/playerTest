import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import rootSaga from '../../saga';

const sagaMiddleware = createSagaMiddleware();


const middleware = [sagaMiddleware];

export const store = createStore(
    rootReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware))));


sagaMiddleware.run(rootSaga);
