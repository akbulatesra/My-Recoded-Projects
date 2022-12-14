const superbowlWin = (record) => {
  const result = record.find((item) => item.result === 'W');
  return result ? result.year : undefined;
};
