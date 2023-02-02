const writeCards = (list, e) => {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(`Thank you, ${list[i]}, for the wonderful ${e} gift!`);
  }
  return result;
};
const countDown = () => {
  let i = 0;

  while (i <= 10) {
    console.log(i);
    i++;
  }
};
