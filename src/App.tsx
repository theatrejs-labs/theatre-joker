import React from 'react';

import Joker from './components/Joker';

import './stylesheets/main.scss';

interface IProps {
  
}
interface IState {

}

class App extends React.Component<IProps, IState> {

  render() {
    return (
      <Joker />
    );
  }
}

export default App;
