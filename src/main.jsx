import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// initialize redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';
import {ConfigProvider} from "antd";


const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
     <ConfigProvider
         theme={{
             token: {
                 colorPrimary: '#4A772F',

             },
         }}>
        <App />
     </ConfigProvider>
 </Provider>
)
