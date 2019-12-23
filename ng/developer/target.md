# 登入注册
- 登入注册
1. 创建组件
ng generate component componentName 简写 ng g c componentName
2. 登入组件
3. 注册组件
4. 路由
  + 声明
  const routes:Routes = [{path: , component}]
  + 导入路由器模块
  imports: {
      RouteModel.forRoot(routes)
  } 
  + 放入路由插座
    ```
    <a routerLink="login" routerLinkActive="active">注册</a>
    // 要想看到路由内容，需要配置路由出口
    <router-outlet></router-outlet>
    ```
  + 路由链接
    <a routerLink="login" routerLinkActive="active">注册</a>