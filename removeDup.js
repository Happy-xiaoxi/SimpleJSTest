var arr = [1,4,1,1,3,3,4,6,7,8,3,7,0,11,22,22]; 
function dup(arr){
  var str = arr.join(",");
  var dup = [];
  for (var i= 0 ; i < arr.length ; i++){
     if (str.indexOf(arr[i]) !== str.lastIndexOf(arr[i])){
        var ddp = dup.join(",");
        if (ddp.indexOf(arr[i])==-1){
          dup.push(arr[i]);
          arr.splice(i,1);
        }
     }
  } 
   return dup;
  
}

var p =dup(arr);
console.log(p);
console.log(arr);