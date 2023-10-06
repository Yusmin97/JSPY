function minus(firstNumber, secondNumber) {
  if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
    return firstNumber - secondNumber;
  } else {
    console.log(firstNumber, '타입이 잘 못 지정되었습니다.');
  }
}

module.exports = minus;
