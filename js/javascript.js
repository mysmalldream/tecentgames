//��ͼƬ���ֲ�
//����
    var box=document.getElementById("box");  /*ul���ڵĴ����*/
    var screen=box.children[0];
    var ul=screen.children[0];
    var ol =screen.children[2];     //��ť

    var lis=ul.children;    /*����ͼƬ���ڵ�li*////ͼƬ���ڵ�α����
    var ols=ol.children;    /*���а�ť���ڵ�li*///��ť���ڵ�α����
    var picwidth=screen.offsetWidth;    //ͼƬ�Ŀ��
    var timer=null;


//====================cf9������Ļ��Ч===============
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

//==================��Ѷ��Ϸ���а񻬹���Ч====================

    var  tencent=document.getElementById("tencent");
    var  detail=document.getElementById("detail");

        tencent.onmouseover=function(){
            detail.style.display="block";
        }
        detail.onmouseout=function(){
            detail.style.display="none";
        }

//================��ά�����ر�===================================
    var ewm=document.getElementById("ewm");
    var bigewm=document.getElementById("bigewm");
        ewm.onclick=function(){
            animate(bigewm,{"marginLeft":1365} );
        }
//=================��ͼ�ֲ���ʼ===================================
//��ͼƬ�Զ�����
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

    //��껬����ť��ʾ��Ӧ��ͼƬ
    var square1=0;
        for (var i= 0;i<ols.length;i++){        /*������ť*/
            ols[i].index=i;                /*ͼ��ţ���ڵ�����*/
        var ol =ols[i];                /*ÿһ������İ�ť*/
            ols[0].style.backgroundColor='#FCD502';
             ols[i].onmouseover=function(){
                console.log(ols[i]);

        for (var k = 0; k < ols.length; k++){
            ols[k].style.backgroundColor='';
        }
        this.style.backgroundColor='#FCD502';
        //���������� ͨ�����������ƶ�ul
        //ͼƬ�ƶ���λ�� �� ��ǰ��ť������ �� ͼƬ����й� �����Ǹ���
        ul.style.left = -this.index * picwidth + 'px';
        pic=this.index;
        square1=this.index;
    };
};


    //������ȥ����ֹͣ���뿪����

    /*screen.onmouseover=function(){
        clearInterval(timer);
    }*/
   /* screen.onmouseoutr=function(){
        timer=setInterval(playNext,1000);
    }
*/

//==============��ͼ�ֲ�����========================================
//=================tab�����л�Ч����ʼ============================


//=================tab�����л�Ч������============================
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

            //��ʾ��ǰ��Ӧ��li
            for (var j=0;j<contentulli.length;j++){
                contentulli[j].className="list content li";
            }
            var index=this.index;
            contentulli[index].className="list content now";
        }
    }
//================================================================

    //*=================�ֲ�ͼ����===========================*/




//==================nav���������������ͷ=======================
        var ull=document.getElementById("lis");
        var  a=ull.getElementsByTagName('a');

        for (var i=1;i< a.length;i++){
          a[i].onmouseover=function(){
              animate(this.previousElementSibling, {"width": 64});  //ע��˴��м�����
          }
            a[i].onmouseout=function(){
                animate(this.previousElementSibling, {"width": 0});
            }
      }

//========���������ķ�װ��������=====================
//================���»������껬��������ʼ=================
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


//===============���»������껬����������==================
//==���ι�ע���а�ʼ======================================
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


//���ι�ע���а����=======================================



//����Ч�������ķ�װ
function animatee(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 30;
        step = leader < target ? step : -step;//step��������
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";//�ֶ��ŵ��յ�
            clearInterval(obj.timer);
        }
    }, 15);
}
//========���������ķ�װ������ʼ=====================
//��װ �ܹ��� ������� ��ָ������ �䵽ָ��ֵ �Ķ�������
//  animate(demo, {"top": 200, "left": 300, "width": 400})
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//�������е����Զ�����Ŀ��ֵ��
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
        if (flag) {//�����true�����������ȷ�� Ҳ����ȫ������Ŀ�������Ǿ������ʱ��
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