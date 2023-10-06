function three(number) {
  if (typeof number === 'number') {
    return `${number / 10}`;
  }
}

console.log(three(30));
// function prac(first, second, callback) {
//   return callback(first, second);
// }

// function pracTwo(first, callback) {
//   //* 첫번째 매개변수가 문자열일때만 callback함수가 일어나게 한다.
//   if (typeof (first === 'string')) {
//     return callback(first);
//   } else {
//     console.error('문자열이 아닙니다.');
//   }
// }

// pracTwo('hello', function (eventTarget) {
//   return eventTarget + '입니다.';
// });
