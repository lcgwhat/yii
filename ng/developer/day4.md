## rxjs: 通过 Observable 来编写异步和基于事件的程序
主要概念
- observable: 可观察对象
- observer： 观察者，回调集合
- subscription：订阅，表示observer执行，它可以取消执行observer
- operators操作符：操作集合的函数
- subject主题：相当于事件的派发器

创建 observable 对象
- new Observable(observer);
- fromPromise()
- interval()定时器
- fromEvent()事件
- of() 已存在的值
错误处理
- 方式一：ob.subscribe(next,err)
- 方式二：操作符catchError(err=>of(...))
    >使用了方式二，方式一的err回调就不会返回，进入了next


