const arr = [1, 2, 3, 4, 5, 6, 7, 14, 8, 9, 10];
const filteredArr = arr.filter((num) => {
  return num % 3 === 0 || num === 7 || num === 14;
});

console.log(filteredArr); // Output: [3, 7]
