function FindNumsAppearOnce(array) {
      // write code here
      const map= new Map();
      let result = [];

      //遍历数组每一项，出现的次数存放在map里
      for(let i = 0; i < array.length; i++){
        if(map.has(array[i])){
                map.set( array[i] , map.get(array[i])+1)
        }else{
            map.set(array[i], 1);
        }
      }
      console.log(map);
      //遍历map，找到出现次数大于数组长度一半的项
      map.forEach((value, key) => {
          if(value > Math.floor(array.length/2)){
              result.push(key);
          }
      })
      console.log(result);
      return result;
}

FindNumsAppearOnce([1,4,1,1,6])