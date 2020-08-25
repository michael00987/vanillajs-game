// 원시데이터(문자, 숫자 , 불린 등 )를 대입하면 복사이다. 복사이기 때문에 값이 변하지 않는다.
function func1(prameter) {
  prameter = 10;
  console.log('func1', prameter);
}
let input1 = 5;
func1(5);
console.log('input1', input1);

// 객체를 대입하는 것은 참조이고 , 참조 이기 때문에 값이 변한다.
function func2(prameter) {
  prameter.a = 10;
  console.log('func2', prameter);
}

let input2 = {a: 5};
func2(input2);
console.log('input2', input2);

// 위와 같은 것들은 모두 "call by value" 이다.   "call by reference" 가 아니다.
// C 혹은 C++ 같이 포인터가 있는 언어는 "call by reference" 가 있지만 자바스크립트는 포인터가 없기 때문에  "call by value" 가 존재하지 않는다.

/** "call by reference" 가 아닌 반례 */
function func3(prameter) {
  prameter = 10;
  console.log('func3', prameter);
}

let input3 = {a: 5};
func3(input3);
console.log('input3', input3);

//(func2)객체 속성 수정 시에는 참조이지만, (func3)객체 자체를 수정할 시에는 관계가 깨진다. "call by sharing"?? 이라고 하는데 정식 명칭이 아니란 소리가 있어서 "call by value"한다.
// call by reference 였다면, input3 값도 10으로 바뀌게 된다.
