// reverse strings

function myreverse(str){
  var arr = str.split("");
  for (var i=0;i<arr.length/2;i++){
    var tmp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = tmp;
   }
  return arr.join("");
}

var a = "abcdefg";
var b = myreverse(a);
console.log(b);