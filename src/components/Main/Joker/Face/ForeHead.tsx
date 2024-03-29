import React from 'react';

import MoodsContext from '../../../../contexts/joker-properties-context';

class ForeHead extends React.Component{

  static contextType = MoodsContext

  render(){
    return(
      <React.Fragment>
        <g id="ForeheadChoruks">
          <path
            d="M112.311,113.876c16.91,-3.382 26.211,-6.341 35.089,-3.382c8.878,2.96 14.796,6.342 14.796,6.342c0,0 -9.4,-3.912 -21.369,-3.735c-11.969,0.178 -45.426,4.157 -28.516,0.775Z"
            style={{ fillOpacity: 0.2 }} />
          <g>
            <path
              d="M203.1,129.454c16.91,-3.382 41.657,-8.356 50.535,-5.397c8.878,2.959 11.606,7.013 11.606,7.013c0,0 -20.313,-4.08 -32.282,-3.902c-11.969,0.177 -46.77,5.668 -29.859,2.286Z"
              style={{ fillOpacity: 0.2 }} />
            <path
              d="M197.968,129.618c21.04,-6.137 53.013,-12.798 64.059,-7.428c11.046,5.37 14.441,12.726 14.441,12.726c0,0 -25.274,-7.403 -40.166,-7.081c-14.892,0.322 -59.373,7.92 -38.334,1.783Z"
              style={{ fillOpacity: 0.2 }} />
          </g>
          <g>
            <path
              d="M197.561,88.277c-23.604,3.777 -42.66,6.501 -55.42,5.954c-15.594,-0.669 -31.555,-6.116 -31.555,-6.116c0,0 28.49,3.604 45.234,3.147c16.744,-0.458 65.345,-6.762 41.741,-2.985Z"
              style={{ fillOpacity: 0.2 }} />
            <path
              d="M200.238,88.427c-25.28,5.411 -45.691,9.299 -59.374,8.406c-16.723,-1.092 -33.872,-9.23 -33.872,-9.23c0,0 30.569,5.505 48.517,4.944c17.948,-0.562 70.01,-9.53 44.729,-4.12Z"
              style={{ fillOpacity: 0.2 }} />
          </g>
          <path
            d="M121.849,130.619c-22.757,4.748 -35.209,8.456 -47.439,6.222c-12.23,-2.234 -20.467,-5.13 -20.467,-5.13c0,0 12.996,3.142 29.236,1.995c16.24,-1.148 61.428,-7.835 38.67,-3.087Z"
            style={{ fillOpacity: 0.2 }} />
          <g>
            <path
              d="M242.821,102.763c-22.374,-1.594 -27.668,0.726 -36.543,6.391c-10.182,6.5 -17.918,5.713 -17.918,5.713c0,0 16.888,2.858 26.682,-3.804c8.642,-5.878 50.153,-6.706 27.779,-8.3Z"
              style={{ fillOpacity: 0.2 }} />
            <path
              d="M255.342,100.493c-29.573,-2.653 -36.535,0.717 -48.184,8.994c-13.365,9.497 -23.592,8.231 -23.592,8.231c0,0 22.344,4.455 35.193,-5.289c11.338,-8.597 66.157,-9.282 36.583,-11.936Z"
              style={{ fillOpacity: 0.05 }} />
          </g>
        </g>
        <path id="Forehead"
          d="M76.833,161.949c-17.669,-2.888 -18.8,-19.002 20.416,-20.821c39.217,-1.819 41.44,-5.054 59.633,-5.458c18.193,-0.404 65.495,1.819 81.263,2.426c15.767,0.606 25.874,12.735 1.01,19.204c-24.864,6.468 -60.441,32.343 -80.453,31.13c-20.013,-1.213 -60.846,-23.044 -81.869,-26.481Z"
          style={{ fill: "#a49292", fillOpacity: 0.49 }} />
      </React.Fragment>
    )
  }
}

export default ForeHead;