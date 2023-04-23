import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// initialize redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers";
import { ConfigProvider } from "antd";

// redux-persist initialization
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

//const store = createStore(reducers, compose(applyMiddleware(thunk)));
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
let persistor = persistStore(store);
store.subscribe(() => {
  console.log(store.getState());
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#4A772F",
            },
          }}
        >
          <App />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
