import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

export function Store(initialState = {}) {
    const store = createStore(reducers,
        initialState,
        composeWithDevTools(applyMiddleware()),
    );
    return store;
}

const INITIAL_STATE = {
    products: [{ name: 'xbox' }, { name: 'playstation' }],
};

const store = new Store(INITIAL_STATE);

export default store;
