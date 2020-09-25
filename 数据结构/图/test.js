function SpecAdjoinMatrix(vertexArr, optionalArr){
     function getEdgeArr(vertexArr, optionalArr){
        let arr = [];
        vertexArr.forEach(function(ele,index){
            var k = [];
  
            optionalArr.forEach(element => {
                let s = new Set(element);
                if (s.has(ele)) {
                    s.forEach(va=>{
                        if (va != ele) {
                            k.push(va)
                        }
                    })
                }
            });
            arr[index] = k;
        })
        
     }
}