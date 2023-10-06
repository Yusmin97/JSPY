function a(parameter, sentence, type) {
  // return parameter + sentence;
  if(typeof(parameter) === type) {
    if(typeof(sentence) === type) {
      console.log('매개변수 두개 다 문자열입니다.');
    }
  } else {
    console.error("너 입력 틀렸어. 문자열 넣어")
  }
}


let b = a("승민", "이에요.", "string");
let c = a("욱재", "입니다.");
//let b = a();
console.log(b, c);