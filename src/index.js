import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import {ConfigProvider} from 'antd'
import arEG from 'antd/es/locale/ar_EG'
ReactDOM.render(
    
    <Provider store={store}>
        <ConfigProvider locale={arEG}>
            <App/>
        </ConfigProvider>
    </Provider>
    
    
,
document.querySelector('#root'))