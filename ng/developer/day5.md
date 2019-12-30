## 功能开发
1. 自动登入及路由跳转
    - 创建home组件，作为首页（判断是否登入）
    - 路由跳转
        * 链接 `<a routerLike='main'></a>`
        * 编程式跳转： router.navigate(['/home', ...])
            传参：
            a. 必选参数（url传参）
2. 主页架构
    - 创建主页模块：ng g m --routing
    - 创建主页组件： ng g c --spec=false --flat -s -t