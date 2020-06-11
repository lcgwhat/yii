### 在并发性接口中，尽可能不适用AR模型，修改保存数据
- 直接使用sql语句操作
- 不使用AR模型保存/修改，因为AR模型有缓存  
```
    /**
     * 取走
     * @param $outstockId
     * @param integer $quantity 取出的数量
     * @return bool
     */
    public function takeAway($outstockId, $quantity) {
        $model = $this->model;

        $storage = PackStagingZoneItem::findOneByStagingZone($model->id, $outstockId);
        if (is_null($storage)) {
            return $this->setError('出库单不存在当前暂存区里！');
        }

        if ($quantity > $storage->getSurplusCartNum()) {
            return $this->setError('取出的数量超出剩余数量');
        }
        $attributes = [
            'stagingZoneId' => $storage->staging_zone_id,
            'packOrderId' => $storage->pack_order_id,
            'cartNum' => $quantity,
        ];

        $transaction = new Transaction();
        if (!$storage->increaseTakeAwayCartNum($quantity)) {
            $transaction->rollback();
            return $this->setError('取走的车数超过剩余车数！');
        }
        if ($storage->getSurplusCartNum() == 0) {
            if (!PackStagingZoneItem::deleteById($storage->id)) {
                $transaction->rollback();
                return $this->setError('打包暂存记录删除失败');
            }

            if (!$model->decreaseOrderNum(1)) {
                $transaction->rollback();
                return $this->setError('减少单据数量失败！');
            }
        }

        if (!$this->addTakeAwayItem($attributes)) {
            $transaction->rollback();
            return false;
        }

        $transaction->commit();

        return true;
    }

    /**
     * @param $num
     * @return bool
     */
    public function increaseTakeAwayCartNum($num) {
        $num = intval($num);
        if ($num <= 0) {
            return false;
        }

        $condition = [
            'and',
            ['id' => $this->id],
            new Expression("`take_away_cart_num` + {$num} <= `cart_num`"),
        ];

        $attributes = [
            'take_away_cart_num' => new Expression("`take_away_cart_num` + {$num}"),
        ];

        if (self::updateAll($attributes, $condition) <= 0) {
            return false;
        }
        $this->refresh();

        return true;
    }

    public static function deleteById($id) {
        $condition = [
            'and',
            ['id' => $id],
            new Expression("`take_away_cart_num` = `cart_num`"),
        ];

        return static::deleteAll($condition) > 0;
    }

```
