import React from 'react';
import App from './components/App';
import { hydrate, render } from 'react-dom';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
