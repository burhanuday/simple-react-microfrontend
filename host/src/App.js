import React from 'react';
import RemoteComponent from 'remote-component';

const App = ({ title }) => (
  <div>
    <div>{title}</div>
    <RemoteComponent />
  </div>
);

export default App;
