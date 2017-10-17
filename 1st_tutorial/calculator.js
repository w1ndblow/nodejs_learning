function calculator() {
    let  a = +prompt('Введите первое число');
    let  b = +prompt('Введите второе число');
    let  opt = prompt('Знак');
    switch (opt) {
      case '+':
        result=Number(a)+Number(b)
        break;
      case '-':
        result=Number(a)-Number(b)
        break;
      case '/':
        result=Number(a)/Number(b)
        break;
      case '*':
        result=Number(a)*Number(b)
        break;
      default:
        result='что то не то';
        break;
    }
    alert(result);
}

calculator();
