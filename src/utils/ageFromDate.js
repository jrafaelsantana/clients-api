const ageFromDate = (date) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  const diffMs = Date.now() - date.getTime();
  const ageDt = new Date(diffMs);

  return Math.abs(ageDt.getUTCFullYear() - 1970);
};

module.exports = ageFromDate;
