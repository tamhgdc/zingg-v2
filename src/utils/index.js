const getDate = (unix_timestamp) => {
  const date = new Date(unix_timestamp * 1000);

  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedDate = dd + '/' + mm + '/' + yyyy;

  return formattedDate;
};

const getCompactNum = (number) => {
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
  });
  const compactedNum = formatter.format(number);

  return compactedNum;
};

const getDuration = (baseDuration) => {
  const minute = Math.floor(baseDuration / 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const second = (baseDuration - Math.floor(baseDuration / 60) * 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const finalDuration = `${minute}:${second}`;
  return finalDuration;
};

export { getDate, getCompactNum, getDuration };
