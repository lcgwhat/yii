## 重构
@ngModule 中 declarations 和 imports 区别
- declarations 只声明 组件、管道、指令， 当地要用到的
- imports 只导入 模块

1. 提取app路由至独立路由模块AppRoutingModule
2. 提取登入注册到用户模块UserModule
3. 将UserModule中用到的服务，类，组件放到一起
> 错误
```
重构过程中
'router-outlet' is not a known element:
在 userModule 中还需要将 userRoutingModule 导出
@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  exports: [
    UserRoutingModule
  ]
})

```
    - 异步校验
