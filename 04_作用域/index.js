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
