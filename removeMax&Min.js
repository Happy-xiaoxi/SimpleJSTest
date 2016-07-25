// remove the max and min value from array, and the value may be duplicated.

var a = [2,12,34,4];
Array.prototype.removeMax = function(){
    var max1 = Math.max.apply(null,this);
    var pos = this.indexOf(max1);
    return this.splice(pos,1);
}


Array.prototype.removeMin = function(){
var min1 = Math.min.apply(null,this);
var pos = this.indexOf(min1);
return this.splice(pos,1);
}

a.removeMax();
a.removeMin();