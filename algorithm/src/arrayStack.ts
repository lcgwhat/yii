// 栈
class ArrayStack{
    private items:Array<string>;
    private n:number;  // 申请长度为n 的栈
    private count:number;

    constructor (n:number){
        this.items = new Array(n);
        this.n = n;
        this.count = 0;
    }

    public push(item:string){
        if (this.count == this.n) {
            return false;
        }
        this.items[this.count] = item;
        ++this.count;
        
        return true;
    }
    
    public pop(){
        if (this.count == 0 ) {
            return false;
        }
        let tem:string = this.items[this.count-1];
        --this.count;
        return  tem;
    }
    get item(){
        return this.items;
    }
    public getItems(){
        console.log(this.items)
    }
}
