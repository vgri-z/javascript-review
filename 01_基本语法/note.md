## 基本语法

### js 运算符

- '=' '-' '\' '++' '--' '+=' '-=' '\*=' '/=' '%=' '<' '>' '<=' '>=' '&&' '||'

* a++ 与 ++a 的区别

* 比较运算符中，字符串相比

* 非数 NaN 不等于任何类型的数据，包括它自己

* '!'运算符，先转换成布尔值，再取反

* 转化为布尔值为 false 的值
  '' / 0 / false / null / undefined / NaN

* typeof 返回的六种值得类型
  number string boolean object function undefined
  typeof(null) 返回 object，null 最早是用来替代空的 object 的

* 显示类型转化
  Number() parseInt() parseFloat() toString() String() Boolean()
  undefined 和 null 不能使用 toString()

* 隐式类型转化
  'isNan()' | '++' | '--' | '+/-(一元正负)' | '+' | '\*' | '%' | '&'& | '||' | '!' | '<' | '>' | '<=' | '>= '| '==' | '!='
