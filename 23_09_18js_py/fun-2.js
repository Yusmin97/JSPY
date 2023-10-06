const fs = require('fs');

const studentList = [
  '김우진',
  '김현',
  '방승희',
  '변호녕',
  '소사무엘',
  '송영준',
  '신동현',
  '오승민',
  '유승민',
  '윤준현',
  '이민구',
  '이유안',
  '이은정',
  '정영식',
  '최성민',
  '최은철',
  '홍문기',
];

function fun(fileName, contents) {
  fs.writeFile(fileName, contents, function (err) {});
}
for (let i = 0; i < studentList.length; i++) {
  if (studentList[i]) {
    fun(studentList[i] + '.txt', studentList[i]);
  }
}
