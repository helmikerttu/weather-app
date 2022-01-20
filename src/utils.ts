export const dateTimeToTime = (datetime: string) => {
  const parts = datetime.split(' ');
  const time = parts[1].split(':');
  return `${time[0]}:${time[1]}`;
};

export const dateTimeToDate = (datetime: string) => {
  const dateParts = datetime.split(' ')[0].split('-');
  const monthIndex = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][monthIndex];
  const suffix = day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th';
  return month + ' ' + day + suffix;
};

export const capitalize = (string: string) => {
  return string.charAt(0).toLocaleUpperCase() + string.slice(1, string.length);
};
