var js = {
    name: 'javascript',
    birth:1900,
    gender:'male',
    hometown:'Hangzhou'
}
console.log(js.name);
console.log(js['name']);
js.age=18;
console.log(js.age);
delete js.gender;
console.log(js);
console.log(js.hasOwnProperty("hometown"));
if(js.age>=18){
    js.agegroup = "adult";
}
else
{
    js.agegroup="teenager"
}
console.log(js.agegroup);

for (var key in js) {
    console.log(key);
}

var arr=["asd","jkl",1,34,true];
for (var key in arr) {
    console.log(key+'-'+arr[key]);
}
console.log(key);

console.log("=======");
var a=['a','b','c'];
a.name='hello';
console.log(a);
for (var x of a) {
    console.log(x);
}
for (var x in a) {
    console.log(x);}

var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});

var s=new Set(['x','y','z']);
s.add('aa');
s.forEach(function (element,sameElement,set) {
    console.log(element);
});
