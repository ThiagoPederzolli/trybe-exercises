import React, { useContext } from 'react';
import ISSContext from '../context/ISSContext';

const ToggleMap = () => {
  const { showMap, toggleMap } = useContext(ISSContext);
  return (
    <button type="button" onClick={toggleMap}>
      {showMap ? 'Esconder Mapa' : 'Exibir mapa'}
    </button>
  );
};

export default ToggleMap;
