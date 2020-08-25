let prototype = {
  type: '카드',
};
function 카드공장(name, att, hp) {
  let 카드 = Object.create(prototype);
  카드.name = name;
  카드.att = att;
  카드.hp = hp;
  return 카드;
}

function Card(name, att, hp) {
  this.name = name;
  this.att = att;
  this.hp = hp;
}
Card.prototype = prototype;

let 미카엘 = new Card('michael', 5, 10);
console.log(미카엘);
let 무지 = new Card('무지', 1, 2);
console.log(무지);

console.log('------------------------');
미카엘 = Card('michael', 5, 10);
console.log(미카엘);
// new 키워드를 붙이지 않으면 함수로 작동하고 Card 함수는 return 값이 없기 때문에 undefined 를 반환한다.
// 이때 this 는 window 이다
// new 를 붙이면 this 는 해당 변수가 된다. 여기서는 this는  미카엘, 무지 가 된다. 그래서 미카엘.name, 무지.hp 등을 사용할수 있다.
console.log(window.att); //5
console.log(window.hp); //10

console.log('------------------------');
// 엄격모드 // this.name 이 undefined 가 된다. new 를 안 붙였을때 경고를 띄울수 있다.
// 'use strict'를 코드 상단에 붙이면 전체가 엄격모드가 된다.  *** 중간에 오는것은 안되는것 같다. 중간에 있을때는 작동하지 않는 것을 확인했다.
prototype = {
  type: '카드',
};
function Card(name, att, hp) {
  'use strict';
  this.name = name;
  this.att = att;
  this.hp = hp;
}
Card.prototype = prototype;
