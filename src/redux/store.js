import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { rootReducer } from './reducers';

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
