let sosa = "소사무엘";

let nameArray = [];
for(let i = 0; i < sosa.length; i++) {
  console.log(sosa[i]);
  nameArray[i] = sosa[i];
}
console.log(nameArray);

let makeText = "";

for(let j = 0; j < nameArray.length; j++) {
  makeText = makeText + nameArray[j];
}
console.log(makeText);