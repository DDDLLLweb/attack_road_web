import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import configureStore,{ history } from './redux/store'
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './containers/login/';
import App from './App';

const store = configureStore();

store.subscribe(() =>
  console.log(store.getState())
);

const {app} = store
console.log('app---->',app);
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app" />} />
                <Route path="/app" component={App} />
                <Route path="/login" component={LoginForm} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);