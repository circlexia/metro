// https://reactjs.org/docs/javascript-environment-requirements.html
// React 16 depends on the collection types Map and Set.
// A polyfilled environment for React 16 using core-js to support older browsers
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'mobx-react';
import {Home} from './containers';
ReactDOM.render(<Provider>
  <HashRouter>
    <div>
      <Route path="/" exact component={Home} />
    </div>
  </HashRouter>
</Provider>, document.getElementById('root'));
