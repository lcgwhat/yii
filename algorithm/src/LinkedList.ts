import { runInNewContext } from "vm";

// 链表


class Nodes {
    public data: any;
    public next: any;

    constructor(data: any = null, next: any = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {

    /**
     * 单链表头结点（哨兵节点）
     */
    public head: any;

    public length: number;

    constructor(head: any = null) {
        if (head != null) {
            this.head = head;
        } else {
            this.head = new Nodes()
        }
        this.length = 0;
    }

    /**
     * 获取链表长度
     *
     * @return int
     */
    public getLength() {
        return this.length;
    }

    /**
     * 插入数据 采用头插法 插入新数据
     * @param data 
     * @returns Nodes|bool
     */
    public insert(data: any) {
        return this.insertDataAfter(this.head, data);
    }


    public delete(node: Nodes) {
        if (null == node) {
            return false;
        }

        // 获取待删除节点的前置节点
        let preNode = this.getPreNode(node);

        // 修改指针指向
        preNode.next = node.next;
        this.length++;

        return true;
    }
    /**
     * 通过索引获取节点
     *
     * @param int $index
     *
     * @return Nodes|null
     */
    public getNodeByIndex(index:number) {
        if (index > this.length) {
            return false;
        }
        let curNode = this.head.next;
        for(let i=0; i<index; ++i) {
            curNode.next;
        }

        return curNode;
    }
    
    /**
     * 输出单链表 当data的数据为可输出类型
     *
     * @return bool
     */
    public printList(){
        if (null == this.head.next) {
            return false;
        }

        let curNode = this.head;
        // 防止链表带环，控制遍历次数
        while (curNode.next != null && this.length--) {
            console.log(`${curNode.next.data}->`)
            curNode = curNode.next;
        }
        console.log('NULL')

        return true;
    }

     /**
     * 输出单链表 当data的数据为可输出类型
     *
     * @return bool
     */
    public printListSimple(){
        if (null == this.head.next) {
            return false;
        }

        let curNode = this.head;
       
        while (curNode.next != null ) {
            console.log(`${curNode.next.data}->`)
            curNode = curNode.next;
        }
        console.log('NULL')

        return true;
    }

    public getPreNode(node: Nodes) {
        if (node == null) {
            return false;
        }

        let curNode = this.head;
        let preNode = this.head;
        // 遍历找到前置节点 要用全等判断是否是同一个对象
        // http://php.net/manual/zh/language.oop5.object-comparison.php
        while (curNode !== node && curNode != null) {
            preNode = curNode;
            curNode = curNode.next;
        }

        return preNode;
    }

    /**
     * 在某个节点后插入新的节点 (直接插入数据)
     *
     * @param SingleLinkedListNode $originNode
     * @param                      $data
     *
     * @return SingleLinkedListNode|bool
     */
    public insertDataAfter(originNode: Nodes, data: any) {
        // 如果originNode为空，插入失败
        if (originNode == null) {
            return false;
        }

        // 新建链表节点,新节点的下一个节点为源节点的下一个节点
        let newNode = new Nodes(data, originNode.next);

        // 在originNode后插入newNode
        originNode.next = newNode;

        // 链表长度++
        this.length++;
        return newNode;
    }

    /**
     * 在某个节点后插入新的节点
     *
     * @param Nodes $originNode
     * @param Nodes $node
     *
     * @return SingleLinkedListNode|bool
     */
    public insertNodeAfter(originNode: Nodes, node: Nodes) {
        // 如果originNode为空，插入失败
        if (originNode == null) {
            return false;
        }

        node.next = originNode.next;
        originNode.next = node;
        this.length++;

        return node;
    }


     /**
     * 构造一个有环的链表
     */
    public buildHasCircleList(){
        let data = [1, 2, 3, 4, 5, 6, 7, 8];

        let node0 = new Nodes(data[0]);
        let node1 = new Nodes(data[1]);
        let node2 = new Nodes(data[2]);
        let node3 = new Nodes(data[3]);
        let node4 = new Nodes(data[4]);
        let node5 = new Nodes(data[5]);
        let node6 = new Nodes(data[6]);
        let node7 = new Nodes(data[7]);
       
        this.insertNodeAfter(this.head, node0);
        this.insertNodeAfter(node0, node1);
        this.insertNodeAfter(node1, node2);
        this.insertNodeAfter(node2, node3);
        this.insertNodeAfter(node3, node4);
        this.insertNodeAfter(node4, node5);
        this.insertNodeAfter(node5, node6);
        this.insertNodeAfter(node6, node7);

        node7.next = node4;
    }
}

let list = new LinkedList();
list.insert(5)



/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * @param n 倒数第 n 个节点
 */
function removeNthFromEnd(n:number){
    // 哑节点
     let prev = list.head;
    let slow = prev;
    let first = prev;

    for (let i=0; i<n+1; i++) {
        first = first.next;
    }

    while (first != null) {
        slow = slow.next;
        first = first.next;
    }
    slow.next  = slow.next.next;
    list.length--;
    return prev.next;
}
console.log(removeNthFromEnd(1))
list.printListSimple()

class LinklistStack {
    private length: number;
    private head: Nodes;

    constructor() {
        this.head = new Nodes();
        this.length = 0;
    }



    /**
     * 出栈
     * 
     * @return boolean
     */
    public pop() {
        if (0 == this.length) {
            return false;
        }

        this.head.next = this.head.next.next;
        this.length--;

        return true;
    }
    /**
     * 入栈
     * @param value 
     * @return Nodes|boolean
     */
    public push(value: any) {
        return this.pushNode(new Nodes(value))
    }

    /**
     * 入栈
     * @param node Nodes
     * @return boolean|Nodes
     */
    public pushNode(node: Nodes) {
        if (null == node) {
            return false;
        }
        node.next = this.head.next;
        this.head.next = node;

        this.length++;

        return true;
    }

    /**
     * 获取栈顶
     * @return Node
     */
    public top() {
        if (this.length == 0) {
            return false;
        }

        return this.head.next;
    }

    /**
     * 打印栈
     */
    public printSelf() {
        if (this.length == 0) {
            document.body.innerHTML = 'empty stack'
            return false;
        }

        var str = `head.next->`;
        let curNode = this.head;

        while (curNode.next) {
            str += `${curNode.next.data}->`;

            curNode = curNode.next;
        }
        str += `null`;
        document.body.innerText = str;
    }

    public getLength() {
        return this.length;
    }

    public isEmpty() {
        return this.length > 0 ? true : false;
    }
}

let xx = new LinklistStack();

xx.push(1);
xx.push(2);

//xx.printSelf();

