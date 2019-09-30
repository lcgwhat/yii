// 环形队列   队列为空的条件 tail == head , 队列满的情况 (tail+1)/2 = head
// 当队列满的时候 tail 指向的位置没有存储数据。所以环形队列会浪费一个数组的存储空间

export default class CircularQueue {
    // 数组：items , 数组长度为 n
    public items:any;
    private n:number;

    // head:表示队头下标， tail:表示队尾下标
    private head:number = 0;
    private tail:number = 0;

    constructor (length:number){
        this.items = new Array(length);
        this.n = length;
    }
    
    // 入队
    public enqueue(data:any){
        // 队列满
        if ((this.tail+1)%this.n == this.head) {
            return false;
        }
        
        this.items[this.tail] = data;
       
        this.tail = (this.tail + 1)%this.n;

        return true;
    }

    public dequeue(){
        // 队列空
        if (this.tail == this.head) {
            return false;
        }
        
        let ret = this.items[this.head];
        this.head = (this.head+1)%this.n;
       
        return ret;
    }
}