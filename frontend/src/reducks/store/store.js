import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as configureStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { ItemReducer } from "../items/reducers";

import { PostsReducer } from "../posts/reducers";
import { cartReducer } from "../cart/reducers";

// const rootReducer = combineReducers({
//   posts: PostsReducer,
//   items: ItemReducer,
//   carts: cartReducer
// });

// export default function configureStores(preloadedState) {
//   const middlewares = [logger, thunk];
//   const middlewareEnhancer = applyMiddleware(...middlewares);

//   const enhancers = [middlewareEnhancer];
//   const composedEnhancers = composeWithDevTools(...enhancers);

//   const store = configureStore(rootReducer, preloadedState, composedEnhancers);

//   return store;
// }
export default function createStore(history) {
  return configureStore(
    combineReducers({
      posts: PostsReducer,
      items: ItemReducer,
      carts: cartReducer,
    }),
    composeWithDevTools(
      applyMiddleware(
        // routerMiddleware(history),
        thunk
      )
      // DEBUG MODE
      // Download if you want to use : Redux DevTools
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
