// for (var i = 0; i < 100; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (let i = 0; i < 100; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

for (var i = 0; i < 100; i++) {
  function closure(j) {
    setTimeout(function () {
      console.log(j);
    }, i * 1000);
  }
  closure(i);
}
