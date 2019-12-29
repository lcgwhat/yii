1. 常量变量
    - let a:string;
    - let a:number;
    - let a:boolean;
    - let a:string[];
    - const PI = 3.1415;

>  元组

let c:[string, number];
c = ['xiao', 12]; 

> 任意类型

let c:any;
let foo:any[];

> void

function fn():void{}

> 枚举 enum

enum Color {red, green, blue}
Color.red

# typeScript 
1. 接口: 约束类型结构
```
// 接口 interface
interface Person {
    name:string;
    gender:string;
}
function seeYou(person:Person){
    return person.name + '性别' + person.gender
}
seeYou({name:'富通', gender:'男'})
```
2. 类
- 基本用法
- 继承
- 修饰符 public -private -readonly
    - public  成员变量默认public

    - private 成员变量内部可访问

    - protect 成员只能在父类和子类中使用

    - readonly 只读

    - 参数属性： 给构造函数参数加上修饰符，能够同时定义并初始化成员属性  
- 静态属性：通过static关键字修饰成员，可以通过类直接调用
- 存取器
    - get , set
```
class Animal {
    
    // 当父类拥有构造函数，子类必须调用之 （super()）
    // 参数属性在构造函数中声明参数类型
    constructor(protect name:string){
        this.name = name;
    }

    static findByName(){
        return '我是林';
    }
}
class cat {
    constructor(name:string){
        super(name); // 使用super()调用父类
    }
}
new Cat('asd')
```
3. 函数
4. 泛型 generic

    - 返回类型为T

    - T为类型变量，一种特殊的变量，只用于表示类型而不是值
function noGeneric<T>(arg:T):T{
    return arg;
}
- 使用方法1：
noGeneric<string>('string');

- 使用方法2：利用类型推论省略<number>
noGeneric(2)

// 泛型接口
```
interface Result<T> {
    success:boolean,
    data?:T
}
interface User {
    id:number,
    name:string
}
const r:Result<User> = {success:true, data: {id: 1, name: 'dog'}}

```
泛型接口表示什么？ 将来在ajax 返回值的data按约定的类型返回

5. 装饰器 decorator
    - 可以理解为工厂函数
> @NgModule({})

将类ddd作为NgModule的参数对ddd加工处理
```
@NgModule({})
class ddd{

}
```

使用 <kbd>ctrl</kbd>+<kbd>alt</kbd>



