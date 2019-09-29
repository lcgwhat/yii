class ArrayQueue {
    // 数组items , 数组长度n
    public items:any;
    public n:number = 0;

    // head表示队头下标， tail表示队尾下标
    public head:number = 0;
    public tail:number = 0;

    // 申请一个长度为capacity的数组
    constructor (capacity:number){
        this.items = new String(capacity);
        this.n = capacity;
    }

    // 入队
    public enqueue(data:string){
        // 如果 tail == n 表示队尾没有空间
        if (this.tail == this.n) {

            // 
            if (this.head ==0 ) {
                return false;
            }
            // 数据搬移
            for (let i=this.head; i < this.tail; ++i) {
                this.items[i-this.head] = this.items[i];
            }
            // 搬移完重置
            this.tail -= this.head;
            this.head = 0;
        }

        this.items[this.tail] = data;
        ++this.tail;

        return true;
    }


    // 出队
    public dequeue(){
        // 如果head == tail 表示队列是空的
        if (this.head == this.tail) {
            return false;
        }
        let ret:string = this.items[this.head];
        ++this.head;

        return ret;
    }
}