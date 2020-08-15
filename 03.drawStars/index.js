const star = {
  case0: function () {
    for (let star = 1; star <= 16; star += 1) {
      console.log('*'.repeat(star));
    }
  },
  case1: function () {
    for (let star = 1; star <= 16; star += 2) {
      console.log('*'.repeat(star));
    }
  },
  case2: function () {
    for (let star = 1; star <= 16; star *= 2) {
      console.log('*'.repeat(star));
    }
  },
  case3: function () {
    for (let i = 0; i < 10; i++) {
      console.log(' '.repeat(10 - i), '*'.repeat(i));
    }
  },
  case4: function () {
    for (let i = 10; i > 0; i--) {
      console.log(' '.repeat(10 - i), '*'.repeat(i));
    }
  },
  case5: function () {
    for (let i = 10; i > 0; i -= 2) {
      console.log(
        ' '.repeat(10 - i / 2),
        '*'.repeat(i),
        ' '.repeat(10 - i / 2)
      );
    }
  },
  case6: function () {
    for (let i = 9; i > 0; i -= 2) {
      console.log(
        ' '.repeat(10 - i / 2),
        '*'.repeat(i),
        ' '.repeat(10 - i / 2)
      );
    }
  },
  case6: function () {
    for (let i = 1; i < 5; i += 2) {
      console.log(
        ' '.repeat(10 - i / 2),
        '*'.repeat(i),
        ' '.repeat(10 - i / 2)
      );
      for (let i = 5; i > 0; i -= 2) {
        console.log(
          ' '.repeat(10 - i / 2),
          '*'.repeat(i),
          ' '.repeat(10 - i / 2)
        );
      }
    }
  },
};
for (let i = 0; i < Object.keys(star).length; i++) {
  console.log(`case${i}\n`);
  console.log(star[`case${i}`]());
}
