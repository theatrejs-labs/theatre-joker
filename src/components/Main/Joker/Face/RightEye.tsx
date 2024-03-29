import React from 'react';
import MoodsContext from '../../../../contexts/joker-properties-context';

class RightEye extends React.Component{

  static contextType = MoodsContext;

  render(){
    return (
      <React.Fragment>
        <path id="EyeShadowRight"
          d="M276.909,166.946c12.672,17.933 3.635,40.81 -7.403,51.51c-11.037,10.7 -43.963,26.128 -63.159,10.202c-19.196,-15.926 -23.755,-17.17 -23.995,-29.114c-0.14,-6.984 9.114,-19.047 41.209,-30.358c20.475,-7.217 45.437,-13.436 53.348,-2.24Z" />
        <clipPath id="_clip3">
          <path
            d="M276.909,166.946c12.672,17.933 3.635,40.81 -7.403,51.51c-11.037,10.7 -43.963,26.128 -63.159,10.202c-19.196,-15.926 -23.755,-17.17 -23.995,-29.114c-0.14,-6.984 9.114,-19.047 41.209,-30.358c20.475,-7.217 45.437,-13.436 53.348,-2.24Z" />
        </clipPath>
        <g clipPath="url(#_clip3)">
          <path id="EyeFrame"
            d="M260.321,188.643c0,0 -11.011,-7.963 -30.031,-6.967c-19.019,0.995 -34.285,10.202 -33.284,13.686c1.001,3.484 4.004,1.742 8.259,3.235c4.254,1.493 16.016,8.709 28.278,6.718c12.263,-1.99 26.027,-8.46 26.778,-16.672Z"
            style=
              {
                {
                  fill:"#fff",
                }
              }
            />
          <clipPath id="_clip4">
            <path
              d="M260.321,188.643c0,0 -11.011,-7.963 -30.031,-6.967c-19.019,0.995 -34.285,10.202 -33.284,13.686c1.001,3.484 4.004,1.742 8.259,3.235c4.254,1.493 16.016,8.709 28.278,6.718c12.263,-1.99 26.027,-8.46 26.778,-16.672Z" />
          </clipPath>
          <g clipPath="url(#_clip4)">
            <g style={{ transform: `translateX(${this.context.eyeX}px) translateY(${this.context.eyeY}px)` }}>
              <ellipse
                id="EyeBall"
                cx="230.938"
                cy="186.64"
                rx="14.684"
                ry="14.601"
                style=
                  {
                    {
                      fill:"#272727",
                    }
                  }
                />
              <clipPath id="_clip5">
                <ellipse
                  cx="230.938"
                  cy="186.64"
                  rx="14.684"
                  ry="14.601"
                />
              </clipPath>
              <g clipPath="url(#_clip5)">
                <ellipse
                  cx="230.938"
                  cy="186.64"
                  rx="8.79"
                  ry="8.74"
                />
                <ellipse
                  cx="222.513"
                  cy="186.563"
                  rx="2.076"
                  ry="2.064"
                  style=
                    {
                      {
                        fill:"#fff",
                      }
                    }
                  />
              </g>
            </g>
          </g>
        </g>
      </React.Fragment>
    );
  }

}

export default RightEye;