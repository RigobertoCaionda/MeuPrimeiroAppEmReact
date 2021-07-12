import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {persistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
      <persistGate loading={null} persistor={persistor}>
           <App />
      </persistGate>
    </Provider>,
  document.getElementById('root')
);

