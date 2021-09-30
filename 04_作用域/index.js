// var a = 123;
// function test() {
//   var b = 123;
//   function demo() {
//     var c = 234;
//     console.log(b); // 123
//     console.log(a); // 123
//   }
//   demo();
//   console.log(c); // c is not defined
// }
// test();
// 作用域访问顺序：函数里面可以访问外部的全局变量(里面可以访问外面的，外面的访问不到里面的，彼此独立的区间不能相互访问)
// test 与 demo 不能相互访问，但是都可以访问外部的全局变量

// [[scope]]
// 作用域链
// 运行期上下文
// 变量的查找

function foo() {
  function bar() {
    var bb = 234;
    aa = 0;
  }
  var aa = 123;
  bar();
  console.log(aa);
}
var global = 100;
foo();

// 先生成GO -> foo被定义，会保存GO作为自己的作用域链的最顶端 -> global = 100 -> foo被执行 -> foo的执行产生了bar的定义
// 会保存foo的作用域作为自己作用域链的最顶端 -> aa = 123 -> bar执行，bb = 234 aa = 0 -> log(aa)
// 0
