import React from 'react';

import Joker from './Joker';

import Theatre from 'theatre';

interface IProps {
  
}
interface IState {

}

class App extends React.Component<IProps, IState> {

  state = {
    height: 200,
    width: 200
  }

  render() {

    const { width, height } = this.state;

    return (
      <Joker />
    );
  }

  componentDidMount(){
    // const project = Theatre.getProject('Joker');
    // const timeline = project.getTimeline('Joker Modes');
    // const timeline2 = project.getTimeline('Joker Modes2');
    // const t3 = project.getTimeline('Moods/folan/shdgfjsd/ashdg')
    // const object = timeline.getObject(
    //   "Joker",
    //   Joker,
    //   {
    //     props: {
    //       // Call the prop "y" (name is up to us):
    //       width: {
    //         // And the type of our "y" prop is number:
    //         type: "number"
    //       },
    //       height: {
    //         // And the type of our "y" prop is number:
    //         type: "number"
    //       }
    //     }
    //   }
    // );
    // object.onValuesChange(({ width, height })=>{
    //   this.setState({
    //     width,
    //     height,
    //   })
    // })
  }
}

export default App;
