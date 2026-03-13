import './style/main.css';
import { render, h } from '@monygroupcorp/microact';
import App from './components/App.js';

function mount() {
  render(h(App, { path: window.location.hash.slice(1) || '/' }), document.getElementById('app'));
}

mount();
window.addEventListener('hashchange', mount);
