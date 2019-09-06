import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore, { history } from './configureStore';

import './index.css';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })
}
