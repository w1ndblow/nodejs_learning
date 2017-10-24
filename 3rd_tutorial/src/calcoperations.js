export function one(arg) {
  if (!arg) {return 1;}
  if (typeof(arg)==="object") {
    return  calcOps(1, arg[0], arg[1]);
  }
}

export function two(arg) {
  if (!arg) {return 2;}
  if (typeof(arg)==="object") {
    return  calcOps(2, arg[0], arg[1]);
  }
}

export function three(arg) {
  if (!arg) {return 3;}
  if (typeof(arg)==="object") {
    return  calcOps(3, arg[0], arg[1]);
  }
}

export function four(arg) {
  if (!arg) {return 4;}
  if (typeof(arg)==="object") {
    return  calcOps(4, arg[0], arg[1]);
  }
}

export function five(arg) {
  if (!arg) {return 5;}
  if (typeof(arg)==="object") {
    return  calcOps(5, arg[0], arg[1]);
  }
}

export function six(arg) {
  if (!arg) {return 6;}
  if (typeof(arg)==="object") {
    return  calcOps(6, arg[0], arg[1]);
  }
}

export function seven(arg) {
  if (!arg) {return 7;}
  if (typeof(arg)==="object") {
    return  calcOps(7, arg[0], arg[1]);
  }
}

export function eight(arg) {
  if (!arg) {return 8;}
  if (typeof(arg)==="object") {
    return  calcOps(8, arg[0], arg[1]);
  }
}

export function nine(arg) {
  if (!arg) {return 9;}
  if (typeof(arg)==="object") {
    return  calcOps(9, arg[0], arg[1]);
  }
}

function calcOps(a,opt,b) {
  switch (opt) {
    case "+":
        return a + b;
      break;
    case "-":
          return a - b;
      break;
    case "*":
          return a * b;
    case "/":
        return a / b;
    default:
      console.log("somethings wrong")
  }
}

export function plus(b) {
   let res = [];
   res[0]="+";
   res[1]=b;
   return res
}

export function minus(b) {
   let res = [];
   res[0]="-";
   res[1]=b;
   return res
}

export function times(b) {
   let res = [];
   res[0]="*";
   res[1]=b;
   return res
}

export function dividedBy(b) {
   let res = [];
   res[0]="/";
   res[1]=b;
   return res
}
