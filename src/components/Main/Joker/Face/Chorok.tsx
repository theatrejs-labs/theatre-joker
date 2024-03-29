import React from 'react';
import MoodsContext from '../../../../contexts/joker-properties-context';

class Chorok extends React.Component{

  static contextType = MoodsContext;

  render(){
    return (
      <g id="Choruk">
        <path
          d="M120.151,277.199c0,0 -6.519,6.838 -16.519,16.349c-2.5,2.378 -5.218,4.924 -8.107,7.571c-8.73,8.002 -17.007,10.646 -17.007,10.646c0,0 12.4,-13.169 19.657,-19.71c16.924,-15.257 21.976,-14.856 21.976,-14.856Z"
          style=
            {
              {
                fillOpacity:0.07,
              }
            }
          />
        <path
          d="M202.968,277.264c0,0 9.801,10.995 23.711,24.821c8.41,8.359 16.592,11.347 16.592,11.347c0,0 -11.868,-13.675 -18.863,-20.514c-16.314,-15.949 -21.44,-15.654 -21.44,-15.654Z"
          style=
            {
              {
                fillOpacity:0.07,
              }
            }
          />
      </g>
    );
  }

}

export default Chorok;