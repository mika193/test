import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import * as actions from './actions';
import { HashRouter } from 'react-router-dom';

const initApp = async () => {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );

  const [,id] = window.location.hash.split('/');

  console.log(id);

  if ( parseInt(id) >= 10 ) {
    store.dispatch(actions.makePersonRequest(id))
  }
  store.dispatch(actions.makePersonsRequest());

  render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

export default initApp;
