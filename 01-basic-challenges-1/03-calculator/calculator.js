function calculator(num1, num2, operator) {
    // switch (operator) {
    //     case '+':
    //         return num1 + num2;
    //     case '*':
    //         return num1 * num2;
    //     case '/':
    //         return num1 / num2;
    //     case '-':
    //         return num1 - num2;
    //     default:
    //         return num1 + num2

    // }

      const expression = `${num1} ${operator} ${num2}`;
  const result = eval(expression);
  return result
}

module.exports = calculator;
