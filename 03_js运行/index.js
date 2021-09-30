// 1. 预编译前奏

// function test() {}
// test();

// demo();
// function demo() {}
// 上述两个函数都可以执行

// var a = 123;
// console.log(a);
// console.log(b);
// var b = 123;
// 上述两个打印都可以执行

// 以下两句话可以解决大部分问题
// 变量 声明提升：var a就是一个变量声明，将var a提升到最前面
// 函数声明整体提升：函数不管在哪里声明，在与编译阶段，都会被提升到逻辑的最前面
// function a(a) {
//   var a = 234;
//   var a = function () {};
//   a();
// }
// var a = 123;

// imply global暗示全局变量：任何变量未经定义便赋值，此变量就归全局对象window所有
// 一切声明的全局变量，全是window的属性
// window就是全局的域
// function foo() {
//   var a = (b = 123);
//   console.log(a, b, window.b); // b未经定义被赋值，归window所有
// }
// foo();

// 2. 预编译
// 预编译发生在函数执行时的前一刻
// function foo(a) {
//   console.log(a); // function a() {}
//   var a = 123;
//   console.log(a); // 123
//   function a() {}
//   console.log(a); // 123
//   var b = function () {};
//   console.log(b); // fuunction() {}
//   function d() {}
// }

// foo(1);

// AO : {
//   a: function() {},
//   b: undefined,
// }

// 预编译四部曲
// 1. 创建一个AO(Activation Object)(执行期上下文，即函数作用域)
// 2. 找形参与变量声明，作为AO对象的属性名，属性值为undefined
// 3. 将实参与形参相统一
// 4. 在函数体里面找函数声明，值赋予函数体

// function test(a, b) {
//   console.log(a); // function a() {}
//   c = 0;
//   var c;
//   a = 3;
//   b = 2;
//   console.log(b); // 2
//   function a() {}
//   function b() {}
//   console.log(b); // 2
// }
// test(1);

// AO : {
//   a: function a() {},
//   b: function b() {},
//   c: undefined,
// }

// function test(a, b) {
//   console.log(a); // function a() {}
//   console.log(b); // undefined
//   var b = 234;
//   console.log(b); // 234
//   a = 123;
//   console.log(a); // 123
//   function a() {}
//   var a;
//   b = 234;
//   var b = function () {};
//   console.log(a); // 123
//   console.log(b); // function () {}
// }
// test(1);

// AO: {
//   a: function a() {},
//   b: undefined,
// }

// 全局的预编译
// 1. 生成一个GO(Global Object): 全局对象，就是window
// 2. 找形参和变量声明，作为GO对象的属性名，值为undefined
// 3. 在函数体里面找函数声明，值赋予函数体

// console.log(a); // function a() {}
// var a = 123;
// function a() {}
// console.log(a); // 123

// GO: {
//   a: function a() {}
// }

// function foo() {
//   var a = (b = 123);
//   console.log(window.b);
// }
// foo();

// GO: {}
// AO: {
//   a: undefine
// }

// GO与AO的顺序问题：先生成GO，再生成AO，AO的生成发生在函数执行时的前一刻
// 多层嵌套：AO有的，就用AO的，AO没有的，再去找GO的

// console.log(test); // function test(test) {}
// function test(test) {
//   console.log(test); // function test() {}
//   var test = 234;
//   console.log(test); // 234
//   function test() {}
// }
// test(1);
// var test = 123;

// GO: {
//   test: undefined
// }

// GO: {
//   test: function test() {}
// }

// AO: {
//   test: function test() {}
// }

// global = 100;
// function foo() {
//   console.log(global); // undefined
//   global = 200;
//   console.log(global); // 200
//   var global = 300;
// }
// foo();
// var global;

// GO: {
//   global: undefined;
// }

// AO: {
//   global: undefined;
// }

// function test() {
//   console.log(b); // undefined
//   if (a) {
//     var b = 100;
//   }
//   c = 234;
//   console.log(c); //234
// }
// var a;
// test();
// a = 10;
// console.log(c); // 234

// GO: {
//   a: undefined;
//   c: undefined;
// }

// AO: {
//   b: undefined;
// }

// function bar() {
//   return foo;
//   foo = 10;
//   function foo() {}
//   var foo = 11;
// }
// console.log(bar()); // funftion foo() {}

// GO: {

// }

// AO: {
//   foo: function foo() {}
// }

// a = 100;
// function demo(e) {
//   function e() {}
//   arguments[0] = 2;
//   console.log(e); // 2
//   if (a) {
//     var b = 123;
//     function c() {}
//   }
//   var c;
//   a = 10;
//   var a;
//   console.log(b); // undefined
//   f = 123;
//   console.log(c); // function c() {} / undefined
//   console.log(a); // 10
// }
// var a;
// demo(1);
// console.log(a); // 100
// console.log(f); // 123

// GO: {
//   a: 100
//   f: 123
// }

// AO: {
//   e: function e() {}
//   b: undefined
//   a: undefined
//   c: function c() {}
// }

// 面试题

var str = false + 1;
console.log(str); // 1
var demo = false == 1;
console.log(demo); // false
if (typeof a && -true + undefined + "") {
  console.log("基础扎实");
}
if (11 + "11" * 2 == 33) {
  console.log("基础扎实");
}
!!" " + !!"" - !!false || console.log("你觉得能打印，你就是猪");
