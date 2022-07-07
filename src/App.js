import React from 'react';
import './App.css';
import Routing from './pages/Routing';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <Routing />;
}

export default App;
