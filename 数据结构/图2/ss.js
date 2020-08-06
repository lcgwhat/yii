
/**
 * 这里先说下思路：

1、根据规格列表（specList）创建邻接矩阵（数组）

2、根据可选规格组合(specCombinationList)填写顶点的值

3、获得所有可选顶点，然后根据可选顶点填写同级顶点的值
 */

// 创建邻接矩阵
function AdjoinMatrix (){
    var vertex;// 顶点数组
    var quantity; // 矩阵长度
    var adjoinArray; // 矩阵数组
    function init(vertx){
        vertex = vertex;
        quantity = vertex.length;
        adjoinArray = [];
        adjoinArray = Array(quantity * quantity).fill(0);
    }
    // 传入一个顶点，和当前顶点可达的顶点数组，将对应位置置为1
    function setAdjoinVertexs(id,sides){
        const pIndex = vertex.indexOf(id);
        sides.forEach((item) => {
          const index = vertex.indexOf(item);
          adjoinArray[pIndex * this.quantity + index] = 1;
        });
    }
    /*
   * @param id string
   * 传入顶点的值，获取该顶点的列
   */
  getVertexCol = function(id) {
    const index = vertex.indexOf(id);
    const col = [];
    vertex.forEach((item, pIndex) => {
      col.push(adjoinArray[index + quantity * pIndex]);
    });
    return col;
  }

  //传入一个顶点数组，求出并集
  getCollection = function(params) {
    const paramsColSum = getColSum(params);
    let collections = [];
    paramsColSum.forEach((item, index) => {
      if (item && vertex[index]) collections.push(vertex[index]);
    });
    return collections;
  }

    /*
   *  @param params Array<string>
   * 传入一个顶点数组，求出交集
   */
  function getUnions(params) {
    const paramsColSum = getColSum(params);
    let unions = [];
    paramsColSum.forEach((item, index) => {
      if (item >= params.length && vertex[index]) unions.push(vertex[index]);
    });
    return unions;
  }


}

function SpecAdjoinMatrix(){
    var specList;//: Array<CommoditySpecsType>;
    specCombinationList;//: Array<SpecCategoryType>;

    init = function(specList,specCombinationList){
        AdjoinMatrix();
        specList = specList;
        specCombinationList  = specCombinationList;
        specCombinationList.forEach((item) => {
            this.fillInSpec(item.specs);
        });
    }
}