function a(firstNumber, secondNumber, callback) {
  return callback(firstNumber, secondNumber);
}

a(1, 2, function () {
  //? 매개변수 자리에 함수가 들어간다.
  //* a 함수는 세번째 매개변수에 함수가 들어가기로 약속되어있다.
  //* a 함수 선언 할 때는 어떤 로직이 될지 모른다.
  //* a 함수 '호출' 할 댸는 로직을 결정 해주어야 한다.
});

// let minusValue = a(3, 1, function (firstNumber, secondNumber) {
//   return firstNumber - secondNumber;
// });

// let divideValue = a(function (firstNumber, secondNumber) {
//   return firstNumber / secondNumber;
// });

console.log(minusValue);
