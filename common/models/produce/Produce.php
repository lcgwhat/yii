<?php
/**
 * Produce.php
 * @author liuchg
 */

namespace common\models\produce;

use yii\db\ActiveRecord;

/**
 * tabel : product
 * @package common\models\produce
 * @property  $id
 * @property  $number 商品编号（唯一）
 * @property  $title string
 * @property  $description string
 * @property  $image string
 * @property  $on_sale int 是否在销售
 * @property  $rating double 商品平均评分
 * @property  $sold_count int 销量
 * @property  $review_count int 评价数量
 * @property  $price int SKU 最低价格
 */
class Produce extends ActiveRecord
{
    public static function tableName()
    {
        return 'product'; // TODO: Change the autogenerated stub
    }

    public static function genenateNumber(){
        //商品编号前缀
        $prefix = 'M'.date('Ym');
        for ($i = 0; $i < 10; $i++) {
            // 随机生成6位数字
            $number = $prefix.str_pad(random_int(0,10000),6,'0',STR_PAD_LEFT);
            // 判断是否已经存在
            if (!static::find()->where('number',$number)->exists()) {
                return $number;
            }
        }
        \Yii::error('genenate number error');

        return false;
    }
}