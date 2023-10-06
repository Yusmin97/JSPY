function a() {
  return 'hello';
}
a(); //* 티가 안남 실행은 되는데
console.log(a());

// 다른 것 이다.

function b() {
  console.log('bye');
}
console.log(b());

b();
