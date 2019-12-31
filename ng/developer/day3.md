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
1. 使用ng的指令，生成 `PhoneValidatorDirective`
  - 异步验证器也有自己的对应物：AsyncValidatorFn 和 AsyncValidator。 它们必须返回承诺（Promise）或可观察对象（Observable）
```
指令修饰器，元数据配置
@Directive({
  selector: '[appPhoneValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}
  ]
})

```
2. 在 类PhoneValidatorDirective 中创建 validate 方法
```
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
   // 管道 rxjs
    return this.us.existName(control.value).pipe(
      map((r: Result<string>) => {
        return r.code === 200 ? null : {existName: true};
      }),
      catchError(e => of({existName: true}))
    );
  }
```
3.在页面中使用自定义指令
```
 <input type="text" class="form-control" name="name" [ngModelOptions]="{updateOn: 'blur'}"
           [(ngModel)]="model.name" required #name="ngModel" appPhoneValidator
    >

     <div class="error" [hidden]="phone.valid || phone.untouched">
      <span *ngIf="phone?.errors?.existName">手机号码被使用</span>
    </div>
```
  - 每当表单值变化之后，都会执行所有验证器，在每次按键之后都发出 HTTP 请求会给后端 API 带来沉重的负担，应该尽量避免， 
  - 可以把 updateOn 属性从 change（默认值）改成 submit 或 blur 来推迟表单验证的更新时机。
```
<input [(ngModel)]="name" [ngModelOptions]="{updateOn: 'blur'}">
```

