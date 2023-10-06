// ? studentList === 학생들 이름목록
// ? length === 길이값, 총원
const studentList = [
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
];
// 이 암호는 studentlist에 학생들의 이름을 목록화를 한다.
for(let i = 0; i< studentList.length; i++) { 

  if(studentList[i] === "유승민") {  //if에 studentlist에 있는 유승민이라는 값을 넣어서 문장을 만든다.

    console.log(studentList[i]);

  } 
  else {   //else에서는 if에 있는 유승민이라는 값을 빼고 studentlist에 있는 모든 사람들의 이름 값을 넣는다.

    console.log("나는" + studentList[i] + " 이다.");

  }

}
