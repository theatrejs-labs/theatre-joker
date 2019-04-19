import React from 'react';

import MainContainer from './MainContainer';

import './style.scss';

class JokerWrapper extends React.Component{

  render(){
    return (
      <div className="main">
        <MainContainer />
      </div>
    );
  }

}

export default JokerWrapper;