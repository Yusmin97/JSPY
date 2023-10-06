function one() {
  console.log('one 함수 테스트');
  return two();
}

function two() {
  console.log('two 함수 테스트');
  return three();
}

function three() {
  return '세번째 함수입니다.';
}

console.log(one());
