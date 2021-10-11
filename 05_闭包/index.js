// function a() {
//   function b() {
//     var bbb = 234;
//     console.log(aaa);
//   }
//   var aaa = 123;
//   return b;
// }
// var glob = 100;
// var demo = a();
// demo();

// GO: {
//   glob: 100
//   demo:
// }

// a: AO: {
//   aaa: 123
// }

// b: AO: {
//   bbb: 234
// }

// 123

// 闭包的作用
// 1. 函数累加器
// function add() {
//   var counter = 0;
//   return function () {
//     counter++;
//     console.log(counter);
//   };
// }

// var demo = add();
// demo();
// demo();
// demo();
// demo();
// demo();

// 2. 可以做缓存
// 缓存是外部不可见，但是确实有存储的结构
// function test() {
//   var num = 100;
//   function a() {
//     num++;
//     console.log(num);
//   }
//   function b() {
//     num--;
//     console.log(num);
//   }
//   return [a, b];
// }

// var myArr = test();
// myArr[0]();
// myArr[1]();

// function eater() {
//   var food = "";
//   var obj = {
//     eat: function () {
//       console.log("i am eating " + food);
//       food = "";
//     },
//     puah: function (myFood) {
//       food = myFood;
//     },
//   };
//   return obj;
// }

// var eater1 = eater();
// eater1.puah("apple");
// eater1.eat();

// 3. 可以实现封装，属性私有化
// 4. 模块化开发，防止污染全局变量

// 立即执行函数：无函数声明，立即执行，执行过后就会被释放，适合做初始化工作
// 针对初始化功能的函数：只想让它执行一次的函数
// (function () {
//   var a = 123;
//   var b = 234;
//   console.log(a + b);
// })();

// 执行符号：()
// 只有表达式才可以被执行符号执行

// 函数表达式
// var test = function () {
//   console.log("立即执行函数");
// };

// test();

// 函数声明
// function test() {
//   console.log("立即执行函数");
// }
// test();

// 立即执行函数执行过后，函数名称就会被废弃
// var test = (function () {
//   console.log("只有表达式才能被执行");
// })();

// 添加一个+号，就有把函数转化为数字的趋势，此时的的函数就相当于一个不表达式，所以可以被执行符号执行
// +(function test(num) {
//   console.log(num);
// })(12);

// -(function test() {
//   console.log("----");
// })();

// !(function () {
//   console.log("!!!!");
// })();

// 闭包的防范，通过立即执行函数

// function test() {
//   var arr = [];
//   for (var i = 0; i < 10; i++) {
//     arr[i] = function () {
//       console.log(i + " ");
//     };
//   }
//   return arr;
// }

// function test() {
//   var arr = [];
//   for (var i = 0; i < 10; i++) {
//     (function (i) {
//       arr[i] = function () {
//         console.log(i + " ");
//       };
//     })(i);
//   }
//   return arr;
// }

// var myArr = test();
// for (var j = 0; j < 10; j++) {
//   myArr[j]();
// }
