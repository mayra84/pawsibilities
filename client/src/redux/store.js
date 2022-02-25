import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import ThunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'


const composeEnhancers = composeWithDevTools({});

const middlewareEnhancer = applyMiddleware(ThunkMiddleware)

export const store = createStore(rootReducer, composeEnhancers(middlewareEnhancer))


export default store 
