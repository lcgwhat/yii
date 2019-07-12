- 一个应用的请求是用 yii\web\Request 对象来表示的该对象提供了诸如 请求参数（译者注：通常是GET参数或者POST参数）、HTTP头、cookies等信息。
- ###### 通过 `request application component` 应用组件（yii\web\Request 类的实例） 获得访问相应的请求对象


### 请求的参数
- 要获取请求参数，你可以调用 request 组件的 get() 方法和 post() 方法。 他们分别返回 $_GET 和 $_POST 的值。例如
````composer log
    $rquest = Yii::$app->request;
    $request->get();// 等价于: $get = $_GET;
    
    $id = $request->get('id', 1);    
    // 等价于: $id = isset($_GET['id']) ? $_GET['id'] : 1;
   
    $requset->post();
    
    $name = $request->post('name');   
    // 等价于: $name = isset($_POST['name']) ? $_POST['name'] : null;
    
````










