import {createStore,combineReducers} from 'redux';

import ApiUrlDuck from './ApiUrlDuck';

const reducers = combineReducers({
    [ApiUrlDuck.store]: ApiUrlDuck.reducer
});

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;