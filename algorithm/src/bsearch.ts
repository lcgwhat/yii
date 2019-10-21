// 二分查找

function bsearch(a:Array<number>, n:number,value:number){
    let low:number = 0;
    let height:number = n-1;
    
    while (low <= height) {
        let mid:number = (low + height) / 2;
        if (a[mid] == value) {
            return mid;
        } else if(a[mid] < value) {
            low = mid+1;
        } else {
            height = mid-1;
        } 
    }

    return -1;
}

function b2search(a:Array<number>, n:number,value:number){
    let low:number = 0;
    let height:number = n-1;

    while(low <= height) {
        let mid:number = low +((height-low)>>1);

        if (a[mid] > value) {
            height = mid - 1;
        } else if (a[mid] < value) {
            low = mid + 1;
        } else {
            if ((mid == n-1) || a[mid+1] != value) return mid;
            else low = mid + 1;
        }
    }

    return -1;
}
export {
    bsearch,
    b2search
}