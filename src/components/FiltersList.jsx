import React, { useContext, useState } from 'react';
import {Context} from '../context/Provider';

function FiltersList() {
  const [hiddenInput, setHiddenInput] = useState(true);
  const { setDaysFilter, daysFilter, setCompanyFilter, companyFilter } = useContext(Context);

  return(
    <div className='filtersList'>
      <div className='companyFilter'>
        <button
          className='buttons'
          id='btn-company'
          onClick={() => setHiddenInput(!hiddenInput)}
        >
          Search by company name
        </button>
        {/* The input is hidden until the "search by company name" button is clicked. Clicking again 
        will hide the input*/}
        <input
          className='input'
          type='text'
          placeholder='Filter by company name'
          hidden={hiddenInput}
          onChange={(e) => setCompanyFilter(e.target.value)}
          value={companyFilter || ''}
        />
      </div>
      <button
        className='buttons'
        id='btn-days'
        onClick={(e) => {
          e.target.className=`buttons ${!daysFilter}`;
          setDaysFilter(!daysFilter);
        }}
      >
        Last 7 days
      </button>
      {/* If the days filter is on, the button change its colors (making it clear the filter is on) 
      and clicking it again will remove the filter and change colors back */}
    </div>
  );
}

export default FiltersList;