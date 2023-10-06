// function typeCheck(parameter) {
//   if (parameter === 'li') {
//     console.log('li 임');
//   } else if (parameter === 'p') {
//     console.log('p 임');
//   } else if (parameter === 'h1') {
//     console.log('h1 임');
//   } else {
//     console.error('원하는 값 아님');
//   }
// }

// function typeCheck(parameter) {
//   if (parameter === 'li' || parameter === 'p' || parameter === 'h1') {
//     console.log('맞음');
//   } else {
//     console.error('틀림');
//   }
// }

// console.log(typeCheck('li'));

function typeCheck(parameter) {
  // li, p , h1
  let tagNames = ['li', 'p', 'h1'];
  for (let i = 0; i < tagNames.length; i++) {
    if (tagNames[i] === parameter) {
      console.log('맞음');
      return;
    } else {
      console.error('틀림');
    }
  }
}

console.log(typeCheck('li'));
