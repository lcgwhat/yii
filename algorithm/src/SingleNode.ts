export default class SingleNode {
    public data: any;
    public next: any;

    constructor(data: any = null, next: any = null) {
        this.data = data;
        this.next = next;
    }
}