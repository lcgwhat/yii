import { runInNewContext } from "vm";

// 链表


class Nodes{
    public data:any;
    public next:any;

    constructor(data:any = null, next:any = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
   
    
    private size:number = 0;
    private head:Nodes;

    constructor (){
       this.head = new Nodes();
       this.size = 0; 
    }
   
    /**
     * 在指定索引位置添加
     * @param index 
     * @param data 
     */
    public add(index:number, data:any){
        if (this.size < index) {
             throw '超过链表范围';
        }
        let prev:Nodes = this.head;
       
        // 找到index节点
        for (let i=0; i<index; i++) {
            prev = prev.next    
        }
            
        prev.next = new Nodes(data, prev.next);

        this.size ++;
    }
    // 在链表头部添加
    public addFirst(data:any){
        // 实现一
        // let node = new Nodes(data)
        // node.next = this.head;
        
        //this.head = new Nodes(data, this.head);
        //this.size++;
       
        this.add(0,data)
    }

    /**
     * 尾部添加
     * @param data 
     */
    public addLast(data:any){
        this.add(this.size, data)
    }
    /**
     * 编辑
     * @param index 
     * @param data 
     */
    public edit(index:number, data:any){
        
        if (index > this.size) {
            throw '超过链表范围'
        }
        let prev = this.head; // 1
        for (let i=0; i<=index; i++) {
            if (index == i) {
                prev.data = data;
            }
            prev = prev.next;
        }
    }
    
    /**
     * 查找
     * @param index 
     */
    public select(index:number){
        if (index > this.size) {
            throw "超过链表范围"
        }
        let prev = this.head;
        for (let i=0; i<=index; i++) {
            if (index == i) {
                return prev;
            }
            prev = prev.next;
        }
    }

    public delete(index:number){
        if (index > this.size || index < 1 || this.size==0) {
            throw "超过链表范围"
        }
        let prev = this.head;
        console.log(prev)
        for (let i=0; i<=1; i++) {
            prev = prev.next;
        }
        console.log(prev)
        if (this.size == index) {
            prev.next = null;
        } else {
            prev.next = prev.next.next; 
        }
        
        this.size--;
    }

    public deleteLast(){
        if (this.size == 0) {
            throw '链表长度为0';
        }
        let prev = this.head;
        for (let i=0; i<this.size; i++){
            prev = prev.next;
        }
        prev.next = null;
        this.size--;
    }
}

let x = new LinkedList();
 x.addFirst('小米1');
 x.add(1,'小米2')

 x.add(2,'小米3');
 x.delete(3)
 
console.log(x)