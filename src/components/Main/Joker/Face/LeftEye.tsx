import React from 'react';
import MoodsContext from '../../../../contexts/joker-properties-context';

class LeftEye extends React.Component{

  static contextType = MoodsContext;

  render(){
    return (
      <React.Fragment>
        <path id="EyeShadowLeft"
          d="M48.722,178.393c-15.676,15.925 -9.704,40.312 1.742,51.012c11.447,10.7 44.045,13.686 63.952,-2.24c19.907,-15.926 24.635,-17.17 24.884,-29.114c0.145,-6.984 -9.715,-18.887 -44.542,-24.386c-18.912,-2.986 -30.606,-10.947 -46.036,4.728Z" />
        <clipPath id="_clip6">
          <path
            d="M48.722,178.393c-15.676,15.925 -9.704,40.312 1.742,51.012c11.447,10.7 44.045,13.686 63.952,-2.24c19.907,-15.926 24.635,-17.17 24.884,-29.114c0.145,-6.984 -9.715,-18.887 -44.542,-24.386c-18.912,-2.986 -30.606,-10.947 -46.036,4.728Z" />
        </clipPath>
        <g clipPath="url(#_clip6)">
          <path id="EyeFrame1"
            d="M67.471,191.365c0,0 10.948,-7.963 29.86,-6.968c18.912,0.996 34.091,10.203 33.096,13.687c-0.996,3.483 -3.982,1.741 -8.212,3.234c-4.23,1.493 -15.926,8.71 -28.119,6.719c-12.193,-1.991 -25.879,-8.46 -26.625,-16.672Z"
            style={
              {
                fill:"#fff",
              }
            }
          />
          <clipPath id="_clip7">
            <path id="EyeFrame2"
              d="M67.471,191.365c0,0 10.948,-7.963 29.86,-6.968c18.912,0.996 34.091,10.203 33.096,13.687c-0.996,3.483 -3.982,1.741 -8.212,3.234c-4.23,1.493 -15.926,8.71 -28.119,6.719c-12.193,-1.991 -25.879,-8.46 -26.625,-16.672Z" />
          </clipPath>
          <g clipPath="url(#_clip7)">
            <g style={{ transform: `translateX(${this.context.eyeX}px) translateY(${this.context.eyeY}px)` }}>
              <circle
                id="EyeBall1"
                cx="96.687"
                cy="189.361"
                r="14.601"
                style=
                  {
                    {
                      fill:"#272727",
                    }
                  }
              />
              <clipPath id="_clip8">
                <circle
                  cx="96.687"
                  cy="189.361"
                  r="14.601"
                />
              </clipPath>
              <g clipPath="url(#_clip8)">
                <circle
                  cx="96.687"
                  cy="189.361"
                  r="8.74"
                />
                <circle
                  cx="88.635"
                  cy="188.488"
                  r="2.064"
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

export default LeftEye;