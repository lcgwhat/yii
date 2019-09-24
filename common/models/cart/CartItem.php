<?php
/**
 * CartItem.php
 * @author liuchg
 */

namespace common\models\cart;


use yii\db\ActiveRecord;

/**
 * Class CartItem
 * @property $id
 * @property $user_id
 * @property $product_sku_id
 * @property $amount
 */
class CartItem extends ActiveRecord
{
    public static function tableName()
    {
        return 'cart_item';
    }
}