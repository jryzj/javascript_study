function sum(...rest) {
    var s=0;
    console.log(rest);
    console.log(arguments);
    if(rest.length>0)
    {
        for(var i of rest)
        {
            s+=i;
        }
        return s;
    }
    else
        return 0;
}

console.log(sum(1,2,3,4,5,6));

var n=[1,3,5,7,9];
console.log(n.map(String));

var arr=['A','B','C'];
var r=arr.filter(function (element,index,self) {
    console.log(element);
    console.log(index);
    console.log(self);
    return true;
})

function count() {
    var arr1 = [];
    for (var i=1; i<=3; i++) {
        arr1.push((function (n1) {
            return function () {
                return n1 * n1;
            }
        })(i));
    }
    return arr1;
}


var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1());
console.log(f2());
console.log(f3());


