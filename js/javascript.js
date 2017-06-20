//大图片的轮播
//找人
    var box=document.getElementById("box");  /*ul所在的大盒子*/
    var screen=box.children[0];
    var ul=screen.children[0];
    var ol =screen.children[2];     //按钮

    var lis=ul.children;    /*所有图片所在的li*////图片所在的伪数组
    var ols=ol.children;    /*所有按钮所在的li*///按钮所在的伪数组
    var picwidth=screen.offsetWidth;    //图片的宽度
    var timer=null;


//====================cf9周年序幕特效===============
    var cf=document.getElementById("cf");
var cff=document.getElementById("cff");
        cf.onmouseover=function(){
            cff.style.display="block";
            cff.style.zIndex="1";

        };
        cf.onmouseout=function(){
            cff.style.display="none";
            cff.style.zIndex="0";

        };

//==================腾讯游戏排行榜滑过特效====================

    var  tencent=document.getElementById("tencent");
    var  detail=document.getElementById("detail");

        tencent.onmouseover=function(){
            detail.style.display="block";
        }
        detail.onmouseout=function(){
            detail.style.display="none";
        }

//================二维码点击关闭===================================
    var ewm=document.getElementById("ewm");
    var bigewm=document.getElementById("bigewm");
        ewm.onclick=function(){
            animate(bigewm,{"marginLeft":1365} );
        }
//=================大图轮播开始===================================
//大图片自动滚动
    var pic=0;
    var square=0;
            setInterval(function () {
                if (pic == 7) {
                    ul.style.left = 0;
                    pic = 0;
                }

                pic++;
                square++;

                var target = -pic * picwidth;
                animatee(ul, target);

                console.log("pic" + pic);


                for (var i = 0; i < ols.length; i++) {
                    ols[i].style.backgroundColor = '';
                    ols[pic].style.backgroundColor = '#FCD502';
                    if (pic == 6) {
                        ols[5].style.backgroundColor = '';
                        ols[6].style.backgroundColor = '#FCD502';
                    } else if (pic == 7) {
                        ols[6].style.backgroundColor = '';
                        ols[0].style.backgroundColor = '#FCD502';
                    }

                }

            }, 3000)

    //鼠标滑过按钮显示相应的图片
    var square1=0;
        for (var i= 0;i<ols.length;i++){        /*遍历按钮*/
            ols[i].index=i;                /*图阿牛所在的索引*/
        var ol =ols[i];                /*每一个具体的按钮*/
            ols[0].style.backgroundColor='#FCD502';
             ols[i].onmouseover=function(){
                console.log(ols[i]);

        for (var k = 0; k < ols.length; k++){
            ols[k].style.backgroundColor='';
        }
        this.style.backgroundColor='#FCD502';
        //根据索引号 通过动画函数移动ul
        //图片移动的位置 和 当前按钮索引号 和 图片宽度有关 而且是负数
        ul.style.left = -this.index * picwidth + 'px';
        pic=this.index;
        square1=this.index;
    };
};


    //鼠标放上去播放停止，离开继续

    /*screen.onmouseover=function(){
        clearInterval(timer);
    }*/
   /* screen.onmouseoutr=function(){
        timer=setInterval(playNext,1000);
    }
*/

//==============大图轮播结束========================================
//=================tab栏的切换效果开始============================


//=================tab栏的切换效果结束============================
    var em=document.getElementById("emem");
    var ems=em.children;
    var contentul=document.getElementById("contentul");
    var  contentulli=contentul.getElementsByTagName('li');
    for (var i=0;i<ems.length;i++){
        ems[i].index=i;
        ems[i].onmouseover=function(){
            for (var i=0;i<ems.length;i++){
                ems[i].className='list tab topic em';
            }
                this.className='list tab topic current';

            //显示当前对应的li
            for (var j=0;j<contentulli.length;j++){
                contentulli[j].className="list content li";
            }
            var index=this.index;
            contentulli[index].className="list content now";
        }
    }
//================================================================

    //*=================轮播图结束===========================*/




//==================nav导航顶部栏渐变箭头=======================
        var ull=document.getElementById("lis");
        var  a=ull.getElementsByTagName('a');

        for (var i=1;i< a.length;i++){
          a[i].onmouseover=function(){
              animate(this.previousElementSibling, {"width": 64});  //注意此处有兼容性
          }
            a[i].onmouseout=function(){
                animate(this.previousElementSibling, {"width": 0});
            }
      }

//========缓动动画的封装函数结束=====================
//================最新活动动画鼠标滑过动画开始=================
        var one=document.getElementById("one");
        var aa=document.getElementById("aa");
        var oneone=document.getElementById("oneone");

        var two=document.getElementById("two");
        var three=document.getElementById("three");
        var four=document.getElementById("four");
        var five=document.getElementById("five");

        one.onmouseover=function(){
             animate(oneone,{"height":35});
        }
        one.onmouseout=function( event){

            var event = event || window.event;
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
             animate(oneone,{"height":0});
        }


//===============最新活动动画鼠标滑过动画结束==================
//==新游关注排行榜开始======================================
    var  jianbian=document.getElementById("jianbian");
    var  lis=jianbian.getElementsByTagName('li');
        for (var i=0;i<lis.length;i++){
            lis[i].onmouseover=function(){
                console.log(this);
                console.log(this.children[0]);
                animate(this.children[0],{"width":250})
            }
            lis[i].onmouseout=function(){
                console.log(this);
                console.log(this.children[0]);
                animate(this.children[0],{"width":1})
            }
        }


//新游关注排行榜结束=======================================



//动画效果函数的封装
function animatee(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 30;
        step = leader < target ? step : -step;//step有了正负
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";//手动放到终点
            clearInterval(obj.timer);
        }
    }, 15);
}
//========缓动动画的封装函数开始=====================
//封装 能够让 任意对象 的指定属性 变到指定值 的动画函数
//  animate(demo, {"top": 200, "left": 300, "width": 400})
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//假设所有的属性都到底目标值了
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;//0-1 *100 0-100
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
                if (leader !== target) {
                    flag = false;
                }
            } else if (k === "zIndex") {
                obj.style[k] = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
                if (leader !== target) {
                    flag = false;
                }
            }
        }
        if (flag) {//如果是true代表假设是正确的 也就是全部到达目标了我们就清除定时器
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}