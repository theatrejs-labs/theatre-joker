import React, { RefObject, createRef } from 'react';
import MoodsContext from '../../../../contexts/joker-properties-context';
import SVGEditable from '../../../shared/SVGEditable';

interface IProps {

}

interface IState {
  
}

class Lip extends React.Component<IProps, IState>{

  static contextType = MoodsContext;

  paths: {
    [key: string]: React.RefObject<any>
  } = {
    mouth: React.createRef(),
    upperLip: React.createRef(),
    bottomLip: React.createRef()
  }
  
  render(){

    return (
      <g id="Lip">
        <path ref={this.paths.mouth} id="mouth" d="M93.135,340.965c0,0 6.303,14.57 66.913,16.427c64.181,1.965 74.403,-15.46 74.403,-15.46c0,0 -46.442,7.204 -70.192,5.954c-23.75,-1.25 -71.124,-6.921 -71.124,-6.921Z" />
        <path ref={this.paths.bottomLip} id="BottomLip" d="M40.555,277.039c4.459,29.303 4.502,28.114 5.351,32.998c0.849,4.884 8.494,14.864 12.74,22.296c4.247,7.432 9.98,19.535 15.501,25.481c5.521,5.945 13.59,7.432 14.864,10.192c1.274,2.761 -2.76,-4.247 4.672,-5.733c7.432,-1.486 9.555,-4.034 19.323,1.486c9.767,5.521 8.281,0 23.357,1.911c15.077,1.912 21.022,11.255 30.79,11.255c9.768,0 30.577,-13.59 38.221,-14.015c7.645,-0.425 17.356,6.37 25.638,4.247c8.281,-2.123 14.864,-16.775 19.111,-20.809c4.246,-4.035 5.733,-11.255 10.404,-17.2c4.672,-5.946 18.262,-26.33 20.385,-33.55c2.123,-7.22 4.459,-19.748 5.309,-24.207c0.849,-4.459 -2.761,-3.397 -10.617,5.521c-7.857,8.918 -7.857,10.192 -10.83,21.446c-2.973,11.254 0,19.748 -9.131,18.049c-9.13,-1.698 -9.98,-7.432 -14.014,-7.856c-4.035,-0.425 -4.035,1.274 -4.035,1.274c0,0 0.213,1.486 3.186,4.247c2.972,2.76 8.281,6.37 6.582,14.227c-1.699,7.856 0.849,14.863 -6.582,13.165c-7.432,-1.699 -26.473,9.343 -52.166,9.768c-25.694,0.424 -45.866,1.486 -61.579,-1.699c-15.714,-3.185 -37.87,-6.491 -43.603,-15.834c-5.734,-9.343 6.187,-33.429 6.187,-33.429c0,0 -14.864,20.172 -26.542,12.103c-11.679,-8.069 -21.116,-38.865 -22.522,-35.334Z" style={{ fill:"#701214", }} />
        <path ref={this.paths.upperLip} id="UpperLip" d="M93.041,340.968c0,0 42.545,-1.223 48.023,-1.216c10.546,0.013 16.361,1.438 21.797,1.438c5.436,0 13.296,-1.129 20.925,-1.205c19.693,-0.196 50.619,1.958 50.619,1.958c0,0 -26.036,11.455 -70.603,10.916c-42.129,-0.51 -70.761,-11.891 -70.761,-11.891Z" style={{ fill:"#651416" }} />
      </g>
    );
  }

}

export default SVGEditable(Lip);