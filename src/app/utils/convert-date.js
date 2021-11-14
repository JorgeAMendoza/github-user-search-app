export const convertDate = (dateString) => {
  const dateObject = new Date(dateString);
  const monthData = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let monthText = monthData[dateObject.getMonth()];

  return `${dateObject.getDate()} ${monthText} ${dateObject.getFullYear()}`;
};
