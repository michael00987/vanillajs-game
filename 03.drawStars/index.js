case0;

for (let star = 1; star <= 16; star += 1) {
  console.log('*'.repeat(star));
}
case1;

for (let star = 1; star <= 16; star += 2) {
  console.log('*'.repeat(star));
}

case2;

for (let star = 1; star <= 16; star *= 2) {
  console.log('*'.repeat(star));
}

case3;

for (let i = 0; i < 10; i++) {
  console.log(' '.repeat(10 - i), '*'.repeat(i));
}

case4;

for (let i = 10; i > 0; i--) {
  console.log(' '.repeat(10 - i), '*'.repeat(i));
}

case5;

for (let i = 10; i > 0; i -= 2) {
  console.log(' '.repeat(10 - i / 2), '*'.repeat(i), ' '.repeat(10 - i / 2));
}
case6;

for (let i = 9; i > 0; i -= 2) {
  console.log(' '.repeat(10 - i / 2), '*'.repeat(i), ' '.repeat(10 - i / 2));
}
