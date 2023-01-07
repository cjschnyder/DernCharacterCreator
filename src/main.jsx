import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import DernCharacterCreator from './DernCharacterCreator';
import './style/main.scss';
import {persistor, store} from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <DernCharacterCreator />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
