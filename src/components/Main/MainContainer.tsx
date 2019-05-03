import React from 'react';

import Joker from './Joker';

import Theatre from 'theatre';

import { Provider } from '../../contexts/joker-properties-context';

interface IProps {
  
}
interface IState {
  eyeY: number,
  eyeX: number,
  smile: number,
  mouthY: number,
  mouthX: number,
  top: number,
  left: number,
}

class App extends React.Component<IProps, IState> {

  state = {
    eyeX: 0,
    eyeY: 0,
    mouthX: 0,
    mouthY: 0,
    smile: 0,
    top: 0,
    left: 0,
  }

  render() {

    const { eyeX, eyeY, smile, mouthX, mouthY, left, top } = this.state;

    return (
      <Provider
        value={
          {
            eyeX,
            eyeY,
            smile,
            mouthX,
            mouthY,
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

    // Timeline

    const timeline = project.getTimeline('Joker');
    const moodsObject = timeline.getObject(
      "Joker Moods",
      Joker,
      {
        props: {
          eyeX: {
            type: "number",
          },
          eyeY: {
            type: "number",
          },
          mouthX: {
            type: 'number',
          },
          mouthY: {
            type: 'number',
          },
          smile: {
            type: 'number',
          },
        }
      }
    );
    moodsObject.onValuesChange(({ eyeX, eyeY, smile, mouthX, mouthY })=>{
      this.setState({
        eyeX,
        eyeY,
        smile,
        mouthX,
        mouthY,
      })
    });

    const movementObject = timeline.getObject(
      "Joker Movements",
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
    });
  }
}

export default App;
