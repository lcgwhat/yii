

// 动态规划相关
/**
 * 计算背包最多放的重量
 * @param weight  物品重量
 * @param n 物品数量
 * @param w 背包可承受的重量
 */
function knapsack(weight:Array<number>, n:number, w:number){
    // 利用一个二维数组记录，每层达到的不同状态
    let states:any = new Array();
    for (let index = 0; index < n; index++) {
        states[index] = new Array();
        for(let i=0; i<=w; i++){
            states[index][i] = false;
        }
    }
    
    states[0][0] = true;

    for (let i = 1; i < n; i++) {// 动态规划转移
        for(let j=0; j<=w; j++){ // 即决策不把第i个物品放入背包， 把上层的状态转移到 i 层，
            if (states[i-1][j] == true) {
                states[i][j] = states[i-1][j]
            }
        }
        for (let j=0; j<=w-weight[i]; j++) { // 即决策把第i个物品放到背包， 在第i层重量中加入新的物品
            if (states[i-1][j] == true) {
                states[i][j+weight[i]] = true;
            }
        }
    }
    console.log(states)
    for(let i=w; i >= 0; i--) {
        if (states[n-1][i] == true) {
            return i;
        }
    }

    return 0;
}

export default knapsack;