const getUnixTime = (date, time) => {
  const unix = new Date(date + ' ' + time);
  if(isNaN(unix)) {
    throw 'NaN both date and time must be strings';
  }
  return unix.getTime();
};
export default getUnixTime;
