import moment from "moment";

export function getCompanyFiltered(jobs, company) {
  const result = jobs.filter((job) => job.companyName.toLowerCase().includes(company.toLowerCase()));
  // used toLowerCase to make the search easier
  return result;
}

export function getDaysFiltered(jobs) {
  const result = jobs.filter((job) => {
    const sevenDaysAgo = moment().subtract(7, 'days').format('MM-DD-YYYY HH:mm');
    // using moment to get 7 days ago from now, then comparing it to the day the job was posted
    return (moment(job.posted).isAfter(sevenDaysAgo));
  });
  return result;
}
