import axios from 'axios';

const apiGetJobs = async () => {
  const url = 'https://www.zippia.com/api/jobs/';
  const params = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: 'Business Analyst',
    locations: [],
    numJobs: 20,
    previousListingHashes: []
  };
  const result = await axios.request({ url, params, method: 'post' })
    .then((response) => response.data.jobs)
    .catch((error) => error.response.data.message)
  return result;
};

/*
I'm not sure if the responses are being treated correctly since I couldn't test it due to the problem
with the API: it was returning the job array empty, and totalJobs as well. I checked it with Postman.
So I just left this code and started doing a static array of jobs as an example.
*/

export default apiGetJobs;
