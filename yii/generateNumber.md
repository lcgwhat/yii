```
	private static function generateNumber() {
		$date = date('ymdHis');
		$number = '';
		do {
			$rand = mt_rand(100000, 999999);
			$number = '31'.$date.$rand;
		} while(DistributionReturnOrder::existsByNumber($number));

		return $number;
	}
```