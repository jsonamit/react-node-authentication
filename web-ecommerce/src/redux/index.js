import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
// import {thunk} from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {cartReducers} from './reducers/cart/cartReducers';
import {userReducers} from './reducers/user/userReducers';


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducers,
  cart: cartReducers
  // user: persistReducer(persistConfig, userReducers),
})

// const rootReducer = combineReducers({
//   user: persistReducer(persistConfig, userReducers),
//   cart: cartReducers
// });


const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = [thunk];

// const store = createStore(
//   persistedReducer,
//   // applyMiddleware(thunk)
// );

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  // middleware: [thunk]
})

const persistor = persistStore(store);

export { store, persistor };

// const store = configureStore({
//   reducer: {
//     cart: cartReducers,
//     user: userReducers,
//   },
// });

// export default store;