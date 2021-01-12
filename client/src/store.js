import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';
import './index.css';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), composeWithDevTools()));
export default store;