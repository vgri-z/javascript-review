// 1. 属性值得增删改查
// var person = {
//   name: "vgri",
//   age: 18,
//   height: 185,
// };

// person.job = "front-end developer";
// delete person.height;
// person.age = 24;
// console.log(person.name);
// console.log(person);

// // 2. 对象的创建方法
// // 2.1 对象字面量
// var obj = {};
// // 2.2.1 Object构造函数
// var person = new Object();
// // 2.2.2 Object.create(prototype);
// var object = Object.create();
// // 两者的区别不大，建议使用对象字面量

// 3. new操作符
// 构造函数的函数名必须采用大驼峰命名
// 构造函数必须使用new操作符才可以创建出对象
// function Person(name, age, height) {
//   this.name = name;
//   this.age = age;
//   this.height = height;
// }

// var person = new Person("vgri", 18, 185);
// console.log(person);

// 3.1 构造函数内部原理
// 1). 在函数体的最前面添加var this = {}
// 2). 执行this.prop = value
// 3). 隐式的返回return this
function Person() {
  // var this = {}
  this.name = "vgri";
  // return this
}
