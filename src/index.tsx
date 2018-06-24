import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// tslint:disable-next-line: no-unused-expression
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Crimson+Text|Faster+One');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Faster One', sans-serif;
  }
`;

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
