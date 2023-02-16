import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function ContextProvider({ children }) {
  const [daysFilter, setDaysFilter] = useState(false);
  const [companyFilter, setCompanyFilter] = useState('');

  const contextValue = {
    daysFilter,
    setDaysFilter,
    companyFilter,
    setCompanyFilter,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ContextProvider;
