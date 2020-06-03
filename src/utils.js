export  const calculateM = (numbers) => {
  const sum = numbers
  .map(strNumber => Number(strNumber))
  .reduce((acc, number) => acc + number, 0);

  return sum % 2 === 0 ? '0' : '1'
}