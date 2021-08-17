import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import reduxSaver, {wrapInSaverReducer} from "../utils/reduxSaver";
import postsReducer from "./reducers/posts";
import postsWatcher from "./sagas/posts";

/**
 * Middleware.
 */

const saga = createSagaMiddleware();
const middleware = applyMiddleware(saga);
const enhancer = process.env.NODE_ENV === "development" && require("redux-devtools-extension").composeWithDevTools(middleware);

/**
 * Reducers.
 */

const combinedReducers = combineReducers({
	posts: postsReducer
});
const saverReducer = wrapInSaverReducer(combinedReducers);

/**
 * Store.
 */

const store = createStore(saverReducer, enhancer);
saga.run(postsWatcher);

reduxSaver(store);

export default store;
