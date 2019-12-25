## 模型驱动表单
```
<form (ngSubmit)="login()" ))></form>
<input type="text" class="form-control" name="password" [(ngModel)]="model.password">
```
在angular中 （）表示事件输出， []表示事件输入，所以在input 中的 `[(ngModel)]` 表示双向数据绑定

### 登入注册
- 添加登入表单
1. 表单验证：  (模型驱动表单校验)[https://angular.cn/guide/forms]
 第一步：引用 FormModule
 第二步：创建数据模型
 第三步：表单中绑定该模型[(ngModel)] = "model" 
-----
    关于输入输出属性，输出属性(click)="onClick($even)", 输入属性[title]="myName"
    双向绑定及输入有输入 [(ngModel)] = "model.phone"

    模板引用变量： 在当前模板的上下文中定义了以个变量，<input #phone>，若不赋值表示DOM元素，
    若赋值为ngModel, 则可以访问当前元素校验状态；若赋值为ngForm, 则可以访问整个表单校验    

    数据校验基于H5表单校验：常用的有：required, min, max, minlength, maxlength, pattern,
    type='email', type='number', type='url'

    校验状态： phone.valid, invalid, touched, untouched, dirty, pristine

    errors里面的字段有就是H5校验名字，如: errors.required

    条件语句 *ngIF=""
-----
2. 发送代理
 - 配置代理，防止跨域， 在 `package.json`配置 "start": "ng serve --proxyConfig proxy.conf.json",
 ```
 proxy.conf.json文件

 {
  "/api": {
    "target": "http://127.0.0.1",
    "sesure": false,
    "pathRewrite": {
      "^/api": "oop/frontend/web"
    }
  }
}

pathRewrite: 会重写路由，比如：
http://127.0.0.1/api => http://127.0.0.1/oop/frontend/web
 ```
 - 导入 `HttpClient` 模块才能使用http发送请求 

    - httpClient 
    - 依赖注入
    - 发送请求
    - 响应请求 （observation）
 - 和后台打交道一般写入`服务`
 - 组件中调用服务并调用之
3. 后台创建接口