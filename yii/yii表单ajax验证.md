#### yii 表单ajax验证
- 核心在于ActiveForm的异步验证上
- yii2中，ActiveForm默认做了客户端验证，但是表单的提交，却不是无刷新的。也就是常常看到的表单提交后页面会刷新。
- 想要开启无刷新的模式，只需要在ActiveForm开始开启enableAjaxValidation
```$xslt
<?php $form = ActiveForm::begin([
        'id' => 'form-id',
        'enableAjaxValidation' => true,
        'validationUrl' => Url::toRoute(['validate-form']),
    ]
); ?>


        <?= $form->field($model, 'number',['enableAjaxValidation' => true]) ?>
```
- 注意哦，id和enableAjaxValidation一个都不能少。
- 关于validateUrl我们做一个说明。如果你不设置该参数，该地址默认是你当前路由，而又恰巧你当前路由就是表单form的action
- 你会很好奇的发现，当表单项input失去焦点的时候，你对数据的修改已经提交到后端进行了处理了？这往往不是我们想要的，此时就需要给validateUrl设置一个路由地址，其所要请求的操作的意义就在于异步做验证！我们看具体实现：

```$xslt

    /**
     * ajax,表格输入时验证专项款名字唯一
     */
    public function actionCheckAdd() {
        $model = new SpecialAccountForm();
        if ($model->loadPost()) {
            return $this->renderValidate($model, ['name']);
        }
        return true;
    }
//表单提交操作，基本上不需要做改动
if ($model->load(Yii::$app->request->post()) && $model->save()) {
        return $this->redirect(['index']);
    }
}
return $this->render('create', [
    'model' => $model,
]);
```

// 看主要的验证操作，该操作是表单字段失去焦点时异步验证，同时如果直接提交表单，也会先执行该操作进行验证
-------
    public function actionValidateForm () {
        Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $model = new ModelForm();  
        $model->load(Yii::$app->request->post());  
        return \yii\widgets\ActiveForm::validate($model);  
    }
------

modelForm中的rules 规则自定义
------
```
public function rules(){
        return [
            [['code'],'validateCode','on'=>'create']
        ];
    }
    
public function validateCode() {
        $model = Country::findOne($this->code);
        if($model) {
            $this->addError('code','该编码已存在');
        }
    }
```
-----

常用验证规则
````$xslt
https://www.yiichina.com/tutorial/997
````


### 自定义创建验证器（Validators）
除了使用 Yii 的发布版里所包含的核心验证器之外，你也可以创建你自己的验证器。 自定义的验证器可以是`行内验证器`，也可以是独立验证器。

- 若某特性的验证失败了，该方法/函数应该调用 yii\base\Model::addError() 保存错误信息到模型内。 这样这些错误就能在之后的操作中，被读取并展现给终端用户。

```
use yii\base\Model;

class MyForm extends Model
{
    public $country;
    public $token;

    public function rules()
    {
        return [
            // 定义为模型方法 validateCountry() 的行内验证器
            ['country', 'validateCountry'],

            // 定义为匿名函数的行内验证器
            ['token', function ($attribute, $params) {
                if (!ctype_alnum($this->$attribute)) {
                    $this->addError($attribute, 'The token must contain letters or digits.');
                }
            }],
        ];
    }

    public function validateCountry($attribute, $params)
    {
        if (!in_array($this->$attribute, ['USA', 'Web'])) {
            $this->addError($attribute, 'The country must be either "USA" or "Web".');
        }
    }
}
```





