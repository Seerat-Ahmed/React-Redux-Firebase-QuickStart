import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, logger);

export default createStore(reducer,  middleware);