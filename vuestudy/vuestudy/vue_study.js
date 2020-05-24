Vue.component("hello",{    //后面VUE对象调用此组件，所有要把组件定义在对象前面，否者第一次渲染会没有效果。
    data:function(){
        return {
            "name":"tom",
            "time":"morning"
        }

    },
    template:"<p>hello {{name}}, good {{time}}</p>"
})

one=new Vue({
        el: "#vueapp-one",
        data: {
            "name": "jerry",
            "age": 21,
            "bing_link":"http://www.bing.com",
            "HTML":"<h1>hello H1</h1>",
            "CSS":"color:red;background-color:green",
            "mouseX": 0,
            "mouseY": 0,
            "refName":"",
            "refAge":0,
            "refCity":"",
            "vuegreenTag":false,
            "team1":["mouse","rat","cat"],
            "team2":[{"name":"zhao","age":21},{"name":"qian","age":22},{"name":"sun","age":23}],
            "nthLetter":0,
            "note":""
        },
        methods: {
            "hello": function (v) {
                return "hello "+v+" "+this.age;
            },
            "add":function(n){
                this.age+=n;
            },
            "sub":function(n){
                this.age--;
            },
            "updateXY":function(e){
                this.mouseX = e.offsetX;
                this.mouseY = e.offsetY;
            },
            "reverse":function(team){
                team.reverse();
            },
            "telName":function () {
                this.refName = this.$refs.refName.value; //这里是refs，而不是ref！！！
            },
            "addTeam":function (team,id) {
                team.push(document.getElementById(id).value);
            }
        },
        filters:{
            "upperCase":function(word,n) {
                if (n <= word.length) {

                    word.toLowerCase();
                    var w = word.split("");
                    w[n] = String(w[n]).toUpperCase();
                    return w.join("");
                }
                else {
                    return "too big number!";
                }
            }
        }
    }
);

two=new Vue({
    el:"#vueapp-two",
    data:{
        footerTime:(Date()),
    },
    computed:{
        "getName":function () {
            return one.refName;
        }
    },
    methods:{
        "updateDate":function () {
            this.footerTime = Date();
        }
    }
});

