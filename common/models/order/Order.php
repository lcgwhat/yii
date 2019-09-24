<?php
/**
 * Order.php
 * @author liuchg
 */

namespace common\models\order;

use phpDocumentor\Reflection\Types\Context;
use yii\db\ActiveRecord;

/**
 * Class Order
 * @property int $id
 * @property string $no 订单编号
 * @property integer $user_id 用户
 * @property integer $summary 产品摘要
 * @property array $address 收货地址
 * @property int $total_amount 总金额
 * @property string $remard 订单备注信息
 * @property string  $paid_at 支付时间
 * @property string  $payment_method 支付方式
 * @property string|null  $payment_no 支付平台订单号
 * @property string  $refund_status 退款状态
 * @property string|null  $refund_no 退款单号（唯一）
 * @property int,default 0  $closed 订单是否已关闭
 * @property int,default 0  $reviewed 订单是否已评价
 * @property string  $coupon_code_id 优惠卷id
 * @property string  $ship_data 物流数据
 * @property  int $ship_status 物业状态
 * @property  string $extra 其他额外的数据
 */
class Order extends ActiveRecord
{
    public static function tableName(){
        return 'order';
    }
}