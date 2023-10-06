var devNumber = 1;
var devString = "1";
var devBoolean = true;
var devArray = [1, 2, 3];
var devObject = {name: "dev", age: 20};

console.log(devNumber, typeof(devNumber));
console.log(devString, typeof(devString));
console.log(devBoolean, typeof(devBoolean));
console.log(devArray, typeof(devArray));
console.log(devObject, typeof(devObject));

var wrapObject = {
  devNumber: 1,
  devString: "1",
  devBoolean: true,
  devArray: [1, 2, 3],
  devObject: {name: "dev", age: 20},
};

console.log(wrapObject.devNumber);

console.log(wrapObject["devNumber"]);

//배열안의 객체
var dog = [
    "웰시코기",
    "포메",
    "푸들",
    {
      ownerName: "유승민",
      phone: "01012345678"
    }
  ];

//객체안의 객체
var cat = {
    name:"밥",
    family: "샴",
    age: 8,
    owner: {
      ownername: "유승민",
      phone: "01012345678"
    }
};

console.log(dog)
console.log(cat.owner)


