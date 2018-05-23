class FancyList{
    constructor(...items){
        let arr = []
        const error = 'Error, the use of multiple types in the same list is forbidden'
        add(...items);
        
            
        return {
            getList: () => {
                return arr;
            },
            addItems: (...items) => {
                add(...items);  
            },
            addItem: (item) => {
                if (arr.length > 0 && typeof item !== typeof arr[0]){
                    console.log(error);
                } else {
                    arr.push(item);
                }
            },
            getItemAt : (idx)  => {
                return arr[idx];
            },
            getItemsAt :(idx, count) => {
                let listData = [];
                let idxCount = 0;

                for (var i = idx; i < idx + count; i++){             
                    listData[idxCount] = arr[i];
                    idxCount++;
                }

                return listData;
            },
            insertItemAt : (idx, item) => {
                for (var i = 0; i < arr.length; i++){
                    if(typeof item !== typeof arr[0]){
                        return arr;
                    }
                }
                arr.splice(idx, 0, item);
                // return;  
            },
            insertItemsAt : (idx, ...items) => {
                items.forEach(function(item){
                    if(Array.isArray(item)){
                        item.forEach(function(single){
                            if (typeof single !== typeof arr[0]){
                                console.log(error);
                            } else {
                                arr.splice(idx, 0, single);
                            }
                        });
                    } else {
                        if (arr.length > 0 && typeof item !== typeof arr[0]){
                            console.log(error);
                        } else {
                            arr.splice(idx, 0, item);
                        }
                        
                    }
                });   
            },
            removeItemAt : (idx) => {
                arr.splice(idx, 1);
            }, 
            removeItemsAt : (idx, count) => {
                arr.splice(idx, count);
            },
            removeItem : (item) => {
                var idx = arr.indexOf(item);
                arr.splice(idx, 1);
            },
            removeItems : (...items) => {
                items.forEach(function(item){
                    if(Array.isArray(item)){
                        item.forEach(function(single){
                            var idx = arr.indexOf(single);
                            arr.splice(idx, 1);
                        });
                    } else {
                        var idx = arr.indexOf(item);
                        arr.splice(idx, 1);
                    }
                }); 
            }
        }  
        function add(...items){
            items.forEach(function(item){
                if(Array.isArray(item)){
                    item.forEach(function(single){
                        if (arr.length > 0 && typeof single !== typeof arr[0]){
                            console.log(error);
                        } else {
                            arr.push(single);
                        }
                    });
                } else {
                    if (arr.length > 0 && typeof item !== typeof arr[0]){
                        console.log(error);
                    } else {
                        arr.push(item);
                    }
                    
                }
            });   
        }
    }
}
