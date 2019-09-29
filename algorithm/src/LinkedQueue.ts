import SingleNode  from './SingleNode';

export default class LinkedQueue {
    /**
     * 队列开始
     * @var
     */
    private head:SingleNode;
    
    /**
     * 队列结尾
     * @var 
     */
    private tail:SingleNode;

    private length:number;
    constructor (){
        this.head = new SingleNode();
        this.tail = this.head;
        this.length = 0;
    }

    public enqueue(data:any){
        // 先进先出
        let newNode = new SingleNode(data);

        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
    }

    public dequeue(){
        if (this.length == 0) {
            return false;
        }

        let node = this.head.next;
        this.head.next = this.head.next.next;

        this.length--;

        return node;
    }

    public getLength(){
        return this.length;
    }
     /**
     * 打印队列
     */
    public printSelf(){
        if (this.length == 0) {
            console.log('empty queue');
            return;
        }

        console.log('head.next:')
        let cur = this.head;
        while (cur) {
            console.log(cur.data)
            cur = cur.next;
        }
    }
}