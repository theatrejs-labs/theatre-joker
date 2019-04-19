import React from 'react';

import Main from './components/Main';

import './stylesheets/main.scss';

interface IProps {
  
}
interface IState {

}

class App extends React.Component<IProps, IState> {

  render() {
    return (
      <Main />
    );
  }
}

export default App;
