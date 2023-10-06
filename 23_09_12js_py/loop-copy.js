
// let startValue = 0;
// let endValue = 15;
// let nameList = ["공미남", "공욱재", "공추남"]
// let conditionTypeOne = 3;
// let conditionTypeTwo = 6;


let starts = {
  values : {
    start: 0 ,
    end: 10,
  },
  nameList: ["공미남", "공욱재", "공추남"],
  conditionType : {
    One: 3,
    Two: 6
  }
};

function loopTest(start, end, typeOne, typeTwo, nameListOne, nameListTwo, nameListThree) {
  // 리터럴을 걷어 냈다, 변수의 값들로 값을 바꿀수 있다.
  for(let count = starts.values.start; count < starts.values.end; count++) {
      console.log(count);
      if(count === starts.conditionType.One) {
        console.log(starts.nameList[0]);
      } else {
        if(count === starts.conditionType.Two) {
          console.log(starts.nameList[1]);
        } else {
        console.log(starts.nameList[2]);
        }
      }
    } 

}

loopTest();

