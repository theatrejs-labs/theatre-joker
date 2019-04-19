import React from 'react';

import Joker from './Joker';

import Theatre from 'theatre';

import { Provider } from './contexts/joker-properties-context';

interface IProps {
  
}
interface IState {
  sadness: number,
  happiness: number,
  anxiousness: number,
  surpriseness: number,
  top: number,
  left: number,
}

class App extends React.Component<IProps, IState> {

  state = {
    sadness: 0,
    happiness: 0,
    anxiousness: 0,
    surpriseness: 0,
    top: 0,
    left: 0,
  }

  render() {

    const { sadness, happiness, anxiousness, surpriseness, left, top } = this.state;

    return (
      <Provider
        value={
          {
            sadness,
            happiness,
            anxiousness,
            surpriseness,
            left,
            top,
          }
        }
      >
        <Joker />
      </Provider>
    );
  }

  componentDidMount(){
    const project = Theatre.getProject('Joker');

    // Modes Timeline

    const modesTimeline = project.getTimeline('Joker Modes');
    const modesObject = modesTimeline.getObject(
      "Joker",
      Joker,
      {
        props: {
          sadness: {
            type: "number",
          },
          happiness: {
            type: "number",
          },
          anxiousness: {
            type: 'number',
          },
          surpriseness: {
            type: 'number',
          },
        }
      }
    );
    modesObject.onValuesChange(({ sadness, happiness, anxiousness, surpriseness })=>{
      this.setState({
        sadness,
        happiness,
        anxiousness,
        surpriseness,
      })
    });

    // Movement Timeline

    const movementTimeline = project.getTimeline('Joker Movements');
    const movementObject = movementTimeline.getObject(
      "Joker",
      Joker,
      {
        props: {
          top: {
            type: "number",
          },
          left: {
            type: "number",
          },
        }
      }
    );
    movementObject.onValuesChange(({ top, left })=>{
      this.setState({
        top,
        left,
      })
    })
  }
}

export default App;
