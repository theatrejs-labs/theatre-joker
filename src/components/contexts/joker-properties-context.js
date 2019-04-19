import React from 'react';

const ModesContext = React.createContext({
  sadness: 0,
  happiness: 0,
  anxiousness: 0,
  surpriseness: 0,
  left: 0,
  top: 0,
});

const { Provider, Consumer } = ModesContext;

export {
  Provider,
  Consumer,
  ModesContext,
};

export default ModesContext;
