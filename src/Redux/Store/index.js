import { createStore, applyMiddleware ,compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from '../Reducer/rootReducer'; // Your root reducer
import { thunk } from 'redux-thunk';
// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
const devtool=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
// Create store with persisted reducer
const store = createStore(
  persistedReducer,
  //rootReducer,
  devtool(applyMiddleware(thunk))
);

// Persistor
const persistor = persistStore(store);

export { store, persistor };
