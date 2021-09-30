// 手写一个isNaN
// function isNaN(param) {
//   var num = Number(param);
//   if (num) {
//     return false;
//   } else {
//     return true;
//   }
// }

// var param1 = 12;
// console.log(isNaN(param1));

// var param2 = null;
// console.log(isNaN(param2));

// --------------------------------

// ++/--(加加/减减)
// a++放在执行语句里面与单独执行，在执行语句里面，先执行本条语句，再执行++，单独执行，直接++
// var a = "123";
// a++;
// console.log(a);
// var a = "abc";
// a++;
// console.log(typeof a + ": " + a);

// +/-(一元正负)
// var a = +"abc";
// console.log(typeof a + ": " + a);
// 内部隐式调用的是Number()，所以不管是不是数字，都会转化为数字类型

// +隐式类型转化为string，当加号两侧有一个是字符串，就调用的是String()，将两侧的变成字符串

// * %
// 乘与模都会转换成number
// var a = "a" * 1;
// console.log(typeof a + ": " + a);
// 执行的是Number('a')的结果乘以Number(1)的结果，最后得出NaN * 1 = NaN

// && || !
// var a = 1 && "12";
// console.log(typeof a + ": " + a);

// < > <= >=
// 内部调用Number()，转化后，在进行比较
// var a = "1" > 2;
// var b = 2 < "3";
// var c = "abc" > 12;
// var d = "3" > "2"; // 两个字符串比较的ASC码
// console.log(a, b, c, d);

// == !=
// 内部调用Number()，转化后进行比较
// var a = 1 == "1";
// console.log(typeof a + ": " + a);
// const b = 2 != "2";
// console.log(typeof b + ": " + b);

// === !==
// 不会发生隐式类型转换

// 变量未经定义就访问会报错，当且仅当typeof的时候，未定义的变量才不会报错，返回string类型的undefined

console.log(typeof typeof a); // string
