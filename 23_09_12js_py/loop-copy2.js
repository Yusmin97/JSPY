
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

/**
 * *start : 시작값입니다.
 * *end : 끝값입니다.
 * *typeOne : 조건식 중 하나입니다.
 * *typeTwo : 조건식 다른 하나입니다.
 * *nameList : [배열로 되어 있습니다.]
 * 
 * *반복문이구요. 시작 끝 값 잘 설정해주시고 조건식 두개 있어요
 * *이름은 세개 필요합니다.
 */

function loopTest(start, end, typeOne, typeTwo, nameListOne, nameListTwo, nameListThree) {
  // 리터럴을 걷어 냈다, 변수의 값들로 값을 바꿀수 있다.
  for(let count = start; count < end; count++) {
      console.log(count);
      if(count === typeOne) {
        console.log(nameListOne);
      } else {
        if(count === typeTwo) {
          console.log(nameListTwo);
        } else {
        console.log(nameListThree);
        }
      }
    } 
}

loopTest(starts.values.start, starts.values.end, starts.conditionType.One, starts.conditionType.Two, starts.nameList[0], starts.nameList[1], starts.nameList[2]);

loopTest()