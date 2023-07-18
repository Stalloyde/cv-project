import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const Node = document.getElementById('root');

if (Node) {
  const root = ReactDOM.createRoot(Node);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
