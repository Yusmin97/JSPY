var staticObject = {
  name: "static Object",
  explain: "미리, 혹은 이미 작성된 객체"
};

console.dir(typeof(staticObject));
console.log(staticObject.name);
console.log(staticObject.explain);

var dynamicObject = {};
dynamicObject.name = "dynamic Object";
dynamicObject.explain = "동적으로 생성된 객체";
console.dir(typeof(dynamicObject));
console.log(dynamicObject.name);
console.log(dynamicObject.explain);