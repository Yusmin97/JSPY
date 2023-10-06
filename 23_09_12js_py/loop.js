
// let startValue = 0;
// let endValue = 15;
// let nameList = ["공미남", "공욱재", "공추남"]
// let conditionTypeOne = 3;
// let conditionTypeTwo = 6;


let start = {
  values : {
    start: 0 ,
    end: 15,
  },
  nameList: ["공미남", "공욱재", "공추남"],
  conditionType : {
    One: 3,
    Two: 6
  }
};

// 리터럴을 걷어 냈다, 변수의 값들로 값을 바꿀수 있다.
for(let count = startValue; count < endValue; count++) {
    console.log(count);
    if(count === conditionTypeOne) {
      console.log(nameList[0]);
    } else {
      if(count === conditionTypeTwo) {
        console.log(nameList[1]);
      } else {
      console.log(nameList[2]);
      }
    }
  } 
