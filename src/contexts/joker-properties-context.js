import React from 'react';

const MoodsContext = React.createContext({
  sadness: 0,
  happiness: 0,
  anxiousness: 0,
  surpriseness: 0,
  left: 0,
  top: 0,
});

const { Provider, Consumer } = MoodsContext;

export {
  Provider,
  Consumer,
};

export default MoodsContext;
