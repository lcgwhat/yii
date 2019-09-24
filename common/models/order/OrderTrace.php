<?php
/**
 * OrderTrace.php
 * @author liuchg
 */

namespace common\models\order;


use yii\db\ActiveRecord;

/**
 * Class OrderTrace
 * @package common\models\order
 * @property int $id
 * @property int $order_id
 * @property int $user_id
 * @property int $user_type
 * @property string $status
 * @property string $note
 */
class OrderTrace extends ActiveRecord
{
    public static function tableName()
    {
        return 'order_trace'; // TODO: Change the autogenerated stub
    }
}