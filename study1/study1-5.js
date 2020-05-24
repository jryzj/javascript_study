

function checkstk() {
    var
        stkid ,fstkid ,fprice,finfo;
        patten=/^\d{6}$/;

    stkid = document.getElementById('stkid').value;
        fstkid = document.getElementById("stkid1");
        fprice = document.getElementById("price");
        finfo = document.getElementById("info");

        if(!patten.test(stkid))
        {
            alert('请输入6位代码数字！');
            return;
        }

        stkid='0'+stkid;

    window.refreshPrice=function (data) {
        fstkid.innerText = stkid+data[stkid].name;
        fprice.innerText=data[stkid].price;
        alert('lallala');
    }

    window.loadstkData=function(d)
    {
        var
            DAYS = 30,
            data = d.data;
        if(data.length>DAYS) {
            data = data.slice(data.length - DAYS);
        }
        data=data.map(function(x){
            return {
                data:x[0],
                open:x[1],
                close:x[2],
                high:x[3],
                low:x[4],
                vol:x[5],
                chanage:x[6]
            };
        });
        window.drawChart(data);
    }

    window.drawChart=function(data){
        var canvas = document.getElementById('stkChart'),
            cdraw = canvas.getContext('2d'),
            width=canvas.width,
            height=canvas.height,
            gap,cWidth,cHeight,cLength,maxPrice=0,minPrice=100000;

        gap = Math.floor(width / 61);
        cWidth=Math.floor(gap*2*2/3);
        gap = gap * 2 - cWidth;

        for(i of data) {
            if(i.high>maxPrice) maxPrice = i.high;
            if(i.low<minPrice) minPrice = i.low;
        }

        var scale = Math.ceil(height / (maxPrice - minPrice));
        var dotLTx,dotLTy,dotTx,dotTy,drawBasex;

        drawBasex=gap;

        cdraw.clearRect(0, 0, width, height);

        for(i of data) {
            cdraw.beginPath();
            if(i.open>i.close) {
                cHeight = Math.floor((i.open - i.close) * scale);
                dotLTy = height - Math.floor((i.open - minPrice) * scale);
                cdraw.fillStyle = "#7c7";
                cdraw.strokeStyle = "#7c7";
            }
            else
            {
                cHeight = Math.floor((i.close- i.open) * scale);
                dotLTy = height - Math.floor((i.close - minPrice) * scale);
                cdraw.fillStyle = "#f00";
                cdraw.strokeStyle = "#f00";
            }

            dotLTx=drawBasex;

            cLength=Math.floor((i.high - i.low) * scale);
            dotTy=height - Math.floor((i.high - minPrice) * scale);
            dotTx=dotLTx+(cWidth/2);


            cdraw.fillRect(dotLTx,dotLTy,cWidth,cHeight);
            cdraw.moveTo(dotTx, dotTy);
            cdraw.lineTo(dotTx, (dotTy+cLength));
            cdraw.stroke();
            drawBasex=drawBasex+gap+cWidth;
        }

    }

    var
        stkjs = document.createElement('script'),
 stkhead = document.getElementsByTagName('head')[0];
        stkjs.src = 'http://api.money.126.net/data/feed/'+stkid+'?callback=refreshPrice';
    stkhead.appendChild(stkjs);
    stkjs = document.createElement('script');
    stkjs.src ='http://img1.money.126.net/data/hs/kline/day/history/2018/'+stkid+'.json?callback=loadstkData&t=' + Date.now();
    stkhead.appendChild(stkjs);




    /*    var request=new XMLHttpRequest();

        request.onreadystatechange=function(){
            if(request.readyState ===4){
                finfo.innerText = 'connected!';
                if (request.status===200) {
                    finfo.innerText = request.responseText;
                }
                else{
                    finfo.innerText = 'failed :' + request.status;
                }

            }
            else {
                finfo.innerText = 'connecting...';
            }
        }

    request.open('GET', 'jstudy1.html');
        request.send();

    alert('send request');*/

}