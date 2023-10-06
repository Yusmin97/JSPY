function googoodan(number) {
  for (let i = 1; i < 10; i++) {
    console.log(number * i);
  }
}

console.log(googoodan(1)); //? undefined가 뜨는 이유는 return이 없기 때문이다.
googoodan(2);
// googoodan(3);
// googoodan(4);
// googoodan(5);
// googoodan(6);
// googoodan(7);
// googoodan(8);
// googoodan(9);
