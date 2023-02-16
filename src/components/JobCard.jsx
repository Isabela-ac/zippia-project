import React from 'react';
import PropTypes from 'prop-types';
import '../styles/jobCard.css';
import moment from 'moment';

function JobCard(props) {
  const { job } = props;
  const { jobTitle, companyName, jobdesc, posted } = job;

  return(
    <div className='jobCard'>
      <h1>{jobTitle}</h1>
      <h3>{companyName}</h3>
      <p id='description'>{jobdesc}</p>
      <p id='days'>{moment(posted, 'MM-DD-YYYY HH:mm').fromNow()}</p>
    </div>
  );
}
/* I added pointer cursor at the job cards thinking about a improved version (with more time and pages)
which clicking at the card would redirect to a page with all the infos about the job and the option
to apply. 
*/

JobCard.propTypes = {
  job: PropTypes.object,
}.isRequired;

export default JobCard;