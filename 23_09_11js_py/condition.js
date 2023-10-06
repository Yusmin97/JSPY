let a = 1;
let b = "1";

if(a !== b) {
  console.log("참이다!!");
  if(typeof(a) === "number") {
    console.log("a는 숫자 타입입니다.");
    if(typeof(b) === "string") {
      let parseDate = parseInt(b);
      console.log(a+parseDate);
    }
  } else {
    console.log("a는 숫자 타입이 입니다.");
  }
} else {
  console.log("거짓이다");
}

// if(true) {
//   console.log("hello");
// } else {
//   console.log("bye");
// }

// console.log(true)