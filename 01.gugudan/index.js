let firstRanNum = Math.floor(Math.random() * 10 + 1);
let secondRanNum = Math.floor(Math.random() * 10 + 1);
while (true) {
  const result = prompt(`${firstRanNum}*${secondRanNum}`);
  if (firstRanNum * secondRanNum === Number(result)) {
    firstRanNum = Math.floor(Math.random() * 10 + 1);
    secondRanNum = Math.floor(Math.random() * 10 + 1);
    console.log('정답');
  }
}
