import React from 'react';

import MainContainer from './components/MainContainer';

import './stylesheets/main.scss';

interface IProps {
  
}
interface IState {

}

class App extends React.Component<IProps, IState> {

  render() {
    return (
      <MainContainer />
    );
  }
}

export default App;
