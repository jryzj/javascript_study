/*alert('window inner size: ' + window.innerWidth + 'x' + window.innerHeight);
alert('window outer size: ' + window.outerWidth + 'x' + window.outerHeight);
alert(navigator.appName+'=>'+navigator.appVersion+'=>'+navigator.language+'=>'+navigator.platform+'=>'+navigator.userAgent);

if (confirm('information: '+location.protocol+'+'+location.host+'+'+location.port+ '+'+location.pathname+'+'+location.search+'+'+location.hash))
{
    location.assign('http://www.bing.com');
}*/

/*
var s3 = document.createElement('style');
s3.setAttribute('text', 'text/css');
s3.inner = 'p{color:blue}';
document.getElementsByTagName('head')[0].appendChild(s3);
*/

document.title = '努力学习JavaScript!';

var s1 = document.getElementById('s1');
s1.innerHTML = '这是一个学习javascript的练习！';

/*if(confirm('改成H1？'))
{
    s1.innerHTML = '<h1>这是一个学习javascript的练习！</h1>';
    s1.style.color = '#f00';
}*/

var s2 = document.createElement('p');
s2.style.color = '#0f0';
s2.innerText = '新建一个元素';
document.getElementsByTagName('body')[0].appendChild(s2);


var s4 = document.getElementById('list');
var s4_1 = document.getElementById('python');
var s4_new = document.createElement("p");
s4_new.innerText = 'hahah';
s4_new.style.color = '#0ff';
s4.insertBefore(s4_new,s4_1);

for(var i=0;i<s4.children.length;i++) {
    text = s4.children[i].innerText;
    s4.children[i].innerHTML='<h3>'+text+'</h3>';
}

function delang() {
    var lang = document.getElementById('delangg');
    var done=0;
    for(i of s4.children)
    {
        n=i.innerText.toLowerCase().trim();
        m=lang.value.toLowerCase();
        if (n===m)
        {
            done=1;
            s4.removeChild(i);
        }
    }
    if(done===0)
    {
        alert("没有找到该项！");
    }
    return true;
}


var
    imageFile = document.getElementById('image_file'),
    // imageShow= document.getElementById('image_show'),
    imageShow= document.getElementById('image_show1'),
    imageInfo = document.getElementById('image_info');

imageFile.addEventListener("change", Show);

function Show() {
    // imageShow.style.backgroundImage = '';

    if(!imageFile.value)
    {
        alert('select a file pls.')
        return;
    }

    var file = imageFile.files[0];

    imageInfo.innerText = file.name + "{" + (file.size/1000) + "K)";

    if(file.type!='image/jpeg'&&file.type!='image/png'&&file.type!='image/gif') {
        alert('it isn\'t readable image!');
        return;
    }

    var img=window.URL.createObjectURL(file);

    imageShow.src=img;

    /*    var reader = new FileReader();
        reader.onload=function (e) {
            var data = e.target.result;
            imageShow.style.backgroundImage= 'url(' + data + ')';
        }

        reader.readAsDataURL(file);*/

}





