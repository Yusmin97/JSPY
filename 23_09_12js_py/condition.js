let a = {
  jun: "20대",
  min: "20대"
};

// console.log(a.jun === "20대");
// console.log(a.min === "20대");

// if(a.jun === "20대") {
//   if(a.min === "20대"){
//     console.log("민구는 20대입니다");
//     console.log("준현과 민구는 모두 20대입니다.");
//   }
// } else {
//   console.log("준현은 40대입니다.");
// }

if(a.jun === "20대" || a.min === "30대") {
  console.log("조건식 두개 모두 참입니다.");
} else {
  console.log("최소한 둘중 하나가 거짓입니다.");
}