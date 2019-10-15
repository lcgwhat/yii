# 数据提供器两种

## 第一种常用的数据提供器 ,接收的是query查询语句

```
use yii\data\ActiveDataProvider;


return new ActiveDataProvider([
			'query' => $query,
			'pagination' => [
				'pageSize'=>$this->getOption('pagesize'),
			],
			'sort' => [
				'attributes' => [
					'create_time' => [
						'asc' => ['id' => SORT_ASC],
						'desc' => ['id' => SORT_DESC],
					],
				],
				'defaultOrder'=>['create_time' => SORT_DESC],
			],
		]);

```

## 第二种，接收的参数是查询得到的数组
```

use mylibs\yii\data\DataProvider;
use yii\data\Pagination;

$data->item  是一个array

分页
 $pagination = new Pagination([
            'pageSize' => $this->getOption('pagesize'),
            'validatePage' => false,
        ]);

 return new DataProvider([
            'models' => $data->items,
            'totalCount' => $data->totalCount,
            'pagination' => $pagination,
        ]);
```