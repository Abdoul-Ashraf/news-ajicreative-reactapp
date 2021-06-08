import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createStore, applyMiddleware ,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

    const composeEnhancers = (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
let persistor = persistStore(store);

export default { store, persistor, sagaMiddleware };