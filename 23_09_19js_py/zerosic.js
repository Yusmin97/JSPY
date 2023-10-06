function a(one) {
  if (typeof one === 'string') {
    return one;
  } else {
    console.error('문자열 타입 내놔');
  }
}
//* 참일 때는 값이 나오고 거짓일 때는 error값과 undefined가 나온다.
module.exports = a;
