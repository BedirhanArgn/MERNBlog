import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';
import './index.css';
import { composeWithDevTools } from "redux-devtools-extension";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), composeWithDevTools));

export default store;