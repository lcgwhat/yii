- 客户端验证
- ajax验证
- 服务端验证

### 验证方法
要给 model 填充其所需的用户输入数据，你可以调用 yii\base\Model::validate() 方法验证它们。该方法会返回一个布尔值，指明是否通过验证。若没有通过，你能通过 yii\base\Model::$errors 属性获取相应的报错信息

- modelForm 的验证规则: rules


#### rules 

##### 自定义错误信息
```
在声明规则的时候同时指定 message 属性， 来定制某个规则的错误信息，比如这样
public function rules()
{
    return [
        ['username', 'required', 'message' => 'Please choose a username.'],
    ];
}
```
##### rules 条件式验证
```
若要只在某些条件满足时，才验证相关特性，比如：是否验证某特性取决于另一特性的值， 你可以通过when 属性来定义相关条件。举例而言，

    ['state', 'required', 'when' => function($model) {
        return $model->country == 'USA';
    }]
```

#####rules 数据预处理
- 用户输入经常需要进行数据过滤，或者叫预处理。比如你可能会需要先去掉 username 输入的收尾空格。 你可以通过使用验证规则来实现此目的。
```
下面的例子展示了如何去掉输入信息的首尾空格，并将空输入返回为 null。具体方法为通过调用 trim 和 default 核心验证器：

return [
    [['username', 'email'], 'trim'],
    [['username', 'email'], 'default'],
];
也还可以用更加通用的 filter（滤镜） 核心验证器来执行更加复杂的数据过滤。

如你所见，这些验证规则并不真的对输入数据进行任何验证。而是，对输入数据进行一些处理， 然后把它们存回当前被验证的模型特性。

下面的代码示例展示了对用户输入的完整处理， 这将确保只将整数值存储在一个属性中：

['age', 'trim'],
['age', 'default', 'value' => null],
['age', 'integer', 'integerOnly' => true, 'min' => 0],
['age', 'filter', 'filter' => 'intval', 'skipOnEmpty' => true],
以上代码将对输入执行以下操作：

从输入值中去除前后空白。
确保空输入在数据库中存储为 null；我们区分 未设置 值和实际值为 0 之间的区别。 如果值不允许为 null，则可以在此处设置另一个默认值。
如果该值不为空，则验证该值是否为大于0的整数。大多数验证器的 $skipOnEmpty 属性都被设置为true。
确保该值为整数类型，例如将字符串 '42' 转换为整数 42。在这里，我们将 $skipOnEmpty 设置为 true，默认情况下，在 filter 验证器里这个属性是 false。
```

##### 处理空输入
- 当输入数据是通过 HTML 表单，你经常会需要给空的输入项赋默认值。你可以通过调整 default 验证器来实现这一点。举例来说
```
return [
    // 若 "username" 和 "email" 为空，则设为 null
    [['username', 'email'], 'default'],

    // 若 "level" 为空，则设其为 1
    ['level', 'default', 'value' => 1],
];
```

### 创建验证器（Validators）
- 除了使用 Yii 的发布版里所包含的核心验证器之外，你也可以创建你自己的验证器。 自定义的验证器可以是行内验证器，也可以是独立验证器。

##### 行内验证器（Inline Validators）	
行内验证器是一种以模型方法或匿名函数的形式定义的验证器。 
若某特性的验证失败了，该方法/函数应该调用 yii\base\Model::addError() 保存错误信息到模型内。 这样这些错误就能在之后的操作中，被读取并展现给终端用户。
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
 你还可以在错误信息里分别用 {attribute} 和 {value} 来引用 属性的名字（不必手动去写）和属性的值：
 ```
 $validator->addError($this, $attribute, 'The value "{value}" is not acceptable for {attribute}.');
 ```