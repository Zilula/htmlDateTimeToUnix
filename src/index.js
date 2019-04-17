const getUnixTime = (date, time) => {
  const unix = new Date(date + ' ' + time);
  return unix.getTime();
};
export default getUnixTime;
