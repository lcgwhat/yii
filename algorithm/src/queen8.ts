class queen9 {
    public result:Array<number> = [];//全局或成员变量,下标表示行,值表示queen存储在哪一列

    public col8queen(row:number){ // 调用方式：cal8queens(0);
        if (row == 8) { // 8 个棋子都摆放好了，打印结果
            this.printf(this.result);
            return; // 8行棋子都放好了，已经没法再往下递归了，所以就return
        }
        for(let column=0; column < 8; column++) {// 每一行都有8中放法
            if (this.isOk(row, column)) {  // 有些放法不满足要求
                this.result[row] = column; // 第row行的棋子放到了column列
                this.col8queen(row+1) // 考察下一行
            }
        }
    }

    private isOk(row:number, column:number):boolean{
        //判断row行column列放置是否合适
        let leftUp = column-1;
        let rightUp = column+1;
        for (let i = row-1; i >=0 ; i--) {// 逐行往上考察每一行
           if (this.result[i] == column)return false;
            
           // 考察左上对角线：第i行leftUp列有棋子吗？
            if (leftUp >= 0) {
                if (this.result[i] == leftUp)return false;
            }

            // 考察右上对角线：第i行rightUp列有棋子吗？
            if (rightUp < 8 ) {
                if (this.result[i] == rightUp)return false;
            }
            --leftUp;
            --rightUp;
        }
        return true;
    }

    private printf(result:any){
        for (let row=0; row<8; row++) {
            for (let column = 0; column < 8; column++) {
                if (result[row] == column) {
                    console.log("Q ");
                } else {
                    console.log("* ")
                }
                
            }
        }
    }
}