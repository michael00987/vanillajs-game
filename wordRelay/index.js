let word = '미카엘';

while (true) {
  let result = prompt(word);
  if (word[word.length - 1] === result[0]) {
    console.log(result + '정답');
    word = result;
  } else {
    console.log(result + '오답');
  }
}
