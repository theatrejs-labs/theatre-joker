import React from 'react';

const MoodsContext = React.createContext({
  eyeX: 0,
  eyeY: 0,
  smile: 0,
  mouthX: 0,
  mouthY: 0,
  left: 0,
  top: 0,
});

const { Provider, Consumer } = MoodsContext;

export {
  Provider,
  Consumer,
};

export default MoodsContext;
