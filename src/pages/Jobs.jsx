/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
// import apiGetJobs from '../api_call/getJobs'; --> removed due to the problem with the API
import jobsList from '../api_call/manualLibrary'; // I listed some jobs I found in the website as an example.. some informations may be different
import FiltersList from '../components/FiltersList';
import JobCard from '../components/JobCard';
import { Context } from '../context/Provider';
import '../styles/jobsPage.css';
import { getCompanyFiltered, getDaysFiltered } from '../utils/JobsFilters';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const { daysFilter, companyFilter } = useContext(Context);
  useEffect(() => {
    /*const getJobs = async () => {
      setJobs(await apiGetJobs());
    }
    getJobs(); */
    setJobs(jobsList); // Changed the call from the API to the infos I prepared
  }, []); // Similar to ComponentDidMount

  useEffect(() => {
    //everytime a filter is added or removed I will update the jobs
    if (companyFilter) {
      const filteredJobs = getCompanyFiltered(jobsList, companyFilter) || [];
      setJobs(() => filteredJobs);
    }
    if (daysFilter) {
      const filteredJobs = getDaysFiltered(jobs) || [];
      setJobs(() => filteredJobs);
    }
    if (!daysFilter && !companyFilter) setJobs(jobsList);
  }, [daysFilter, companyFilter]);

  return(
    <div className='jobsPage'>
      <h1 className='pageTitle'>BUSINESS ANALYST JOBS NEAR ME</h1>
      <FiltersList />
      <div className='jobsList'>
        {
          jobs.length > 0 && jobs.slice(0, 10).map((job) => (
            <JobCard key={ job.id } job={ job }/>
          ))
          // getting only the 10 first jobs
        }
      </div>
    </div>
  );
}

export default Jobs;