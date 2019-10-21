// 插入排序

function insertSort(arr:Array<number>, n:number){
    if (n <= 1){
        return false;
    }

    for (let i = 1; i < n; i++) {
        let value = arr[i];
        let j = i-1;
        for (; j >= 0; j--) {
            if (arr[j] > value) {
                arr[j+1] = arr[j]; 
            } else {
                break;
            }
        }
        arr[j+1] = value; 
    }

    return arr;
}

// 冒泡排序
function bubbleSort(arr:Array<number>, n:number){
    for (let i = 0; i < n; i++) {
        let flag:boolean = false;
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let tem = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tem;
                flag = true;
            }
        }
        if (!flag)break;
    }

    return arr;
}


// 选择排序fa
function chooseSort(arr:Array<number>, n:number){
    if (n <= 1) {
        return false;
    }

    for (let i = 0; i < n; i++) {
        let indexMix:number = i; // {3}假设本迭代轮次的第一个值为数组最小值
        for (let j = 0; j < n; j++) {
            if (arr[indexMix] > arr[j]) {
                indexMix = j;
            }
           
        }
        if (i !== indexMix) {
            
            let tem = arr[indexMix];
            arr[indexMix] = arr[i];
            arr[i] = tem;
          } 
    }

    return arr;
}

export {
    insertSort,
    bubbleSort,
    chooseSort
};

