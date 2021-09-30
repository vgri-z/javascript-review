// 1. 函数定义

// 1.1 函数声明
// function sum() {}
// console.log(sum);

// 1.2 函数表达式

// var test = function () {};
// console.log(test);
// // 1.2.1命名函数表达式
// // 命名函数表达式会忽略function后面的名字
// var test = function abc() {
//   console.log("a");
// };
// test();
// console.log(test.name); // abc
// // abc(); // 报错: abc is not defined
// // 1.2.2 匿名函数表达式
// function print() {}
// console.log(print.name);

// 2. 组成形式
// // 2.1 函数名称
// function test() {}
// // 组成：关键字function 函数名test 参数() 实现体{}
// function foo(a, b) {}
// // 就相当于在实现体里面var a; var b;

// 2.2 参数
// 形参：函数定义时()里面的参数
// 实参：函数执行时传递的参数
// 函数因为有了参数的存在
// JavaScript天生不定参，形参可以被实参多，实参也可以比形参多
// function sum(a, b) {
//   var c = a + b;
//   console.log(c);
// }
// sum(1, 2);
// sum(3, 5);

// argumments实参列表
// argumments是一个类数组
// function foo(a) {
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// foo(1, 2, 3);

// 形参长度求法
// function foo(a, b, c, d) {
//   console.log(foo.length); // 4
// }
// foo(1, 1, 1);

// 求任意个数的和
// function foo() {
//   var counter = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     counter += arguments[i];
//   }
//   console.log(counter);
// }
// foo(1, 1, 2, 3, 4);

// arguments与对应位置的形参之间存在一种映射关系，两者中的任意一个发生变化，另一个都会跟着变化
// function foo(a, b, c) {
//   console.log(arguments[0]); // 1
//   a = 4;
//   console.log(arguments[0]); // 4 a变化，arguments[0]也跟着变化
//   arguments[0] = 5;
//   console.log(a); // 5 arguments[0]变化，a随之变化
// }
// foo(1, 2, 3);

// function foo(a, b) {
//   b = 2;
//   console.log(arguments[1]); // undefined arguments[1]没有值
// }
// foo(1);

// 3. 返回值 return
// return用于返回值，也可以终止函数
// 没有return的函数一般都会有一个隐式的return
