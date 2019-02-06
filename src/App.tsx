import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { createRootReducer } from 'modules/Reducer';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';

import GridInput from './components/GridInput';
import Home from './components/Home';
import NavBar from './containers/NavBar';

const history = createBrowserHistory();           // Browser historyをとって
const store = createStore(
  createRootReducer(history),
  {},
  compose(applyMiddleware(routerMiddleware(history)))
);   // router用のmiddlewareを適用しておく

const component: React.SFC = () => {
  // ConnectedRouterは1エレメントしかとれないのでRoute群はdivで囲っておく
  // Switchで囲っておくと呼ばれたやつだけrenderingする
  // 共通コンポーネントはSwitchの外側に置いとけば良い

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <NavBar
            data={[
              { display: 'to home', path: '/' },
              { display: 'to grid', path: '/grid' },
            ]}
          />
          <Switch>
            <Route exact={true} path={'/'} component={Home} />
            <Route exact={true} path={'/grid'} component={GridInput} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default component;