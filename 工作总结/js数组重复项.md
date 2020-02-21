```
            var map = {},dest = [];
            for(var i = 0; i < select.length; i++){
                var ai = select[i];
                ai.value = 1;
                if(!map[ai.name]){
                    dest.push({
                        name: ai.name,
                        value: 1
                    });
                    map[ai.name] = ai;
                }else{
                    for(var j = 0; j < dest.length; j++){
                        var dj = dest[j];
                        if(dj.name == ai.name){
                            dj.value=parseFloat(dj.value) + parseFloat(ai.value);
                            break;
                        }
                    }
                }
            };
```