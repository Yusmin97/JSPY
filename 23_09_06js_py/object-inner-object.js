var obj = {
  academyName: "그린컴퓨터아트학원",
  location: "둔산점",
  address: "대전광역시 서구 대덕대로 182 오라클빌딩 3층",
  telNumber: "042-476-2111",
  classroomNumber: 305,
  lectureName: "it's different",
  studentList: [
    "김우진",
    "김현",
    "방승희",
    "변호녕",
    "소사무엘",
    "송영준",
    "신동현",
    "오승민",
    "유승민",
    "윤준현",
    "이민구",
    "이유안",
    "이은정",
    "정영식",
    "최성민",
    "최은철",
    "홍문기"
  ],
};

//console.log(obj["studentList"])
// console.log(
//   "나는 " + obj.address + "의 " + obj.location + obj.academyName + "에 있는"
//   + obj.classroomNumber +"호 강의에 훈련중인 " + obj.studentList[8] + " 입니다."
//   )


// Q. 객체 데이터에 접근해서 문장을 완성하세요.
// example > 나는 어디주소의 어떤학원에 있는 어디강의에 훈련중인 누구입니다. 

for (i=0; 0<obj["studentList"].length; i++) {
  if (obj["studentList"][i] === "유승민") {
    console.log("나는 " + obj["studentList"][i] + " 입니다." )
  }
}
