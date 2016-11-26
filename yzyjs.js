/**
 * Created by Administrator on 2016/8/30 0030.
 */

//轮播图 js
//1 :找对象
window.onload= function () {
    var bannerbl = document.getElementById("bannerbl");
    var screen = document.getElementById("screen");
    var ul = screen.children[0];
    var ulList = ul.children;
    var ol = screen.children[1];
    var arr = document.getElementById("arr");
    var arrleft = document.getElementById("arrleft");
    var arrright = document.getElementById("arrright");
    var imgWidth = screen.offsetWidth;
    var timer = null;
//2. 动态生成页面
// //    2.1生成ol下的li
    for (var i = 0; i < ulList.length; i++) {
        var li = document.createElement("li");
        //    2.1.1 加给ol
        ol.appendChild(li);
        li.innerHTML = i + 1;

    } //    2.1.2获取ol下的li olList
    var olList = ol.children;
//    2.1.3第一个ollist[0]高亮
    olList[0].className = "current";
//    2.2.克隆ullist[0]；加给ul；
    var clon1 = ulList[0].cloneNode(true);
    ul.appendChild(clon1);
//3. 简单轮播
//    3.1 给小方块注册鼠标经过事件
    for (var i = 0; i < olList.length; i++) {
        var li = olList[i];
        //li.setAttribute("index",i);
        li.idx=i;
        li.onmouseover = function () {
            for (var i = 0; i < olList.length; i++) {
                olList[i].className = "";
            }
            this.className = "current";
            //var idx = this.getAttribute("index");
            var idx=this.idx;
            var target = -idx * imgWidth;
            animate(ul, {"left":target});
            // 5.3 移动到小方块的时候，同步问题
            squre = idx;

            pic = idx;
        }
    }
//4. 左右焦点的功能
//    4.1 给bannerbl加鼠标经过和离开事件
    bannerbl.onmouseover = function () {
        arr.style.display = "block";
        //    5.2;鼠标经过停止
        clearInterval(timer);
    }
    bannerbl.onmouseout = function () {
        arr.style.display = "none";
        //    5.3鼠标离开继续
        timer = setInterval(function () {
            arrright.click();
        }, 2000);
    }
//    4.2 给右箭头加点击事件
    var pic = 0;
    var squre = 0;
    arrright.onclick = function () {
        if (pic == ulList.length - 1) {
            pic = 0;
            ul.style.left = "0px"
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, {"left":target});

        //    小方块同步问题
        if (squre == olList.length - 1) {
            squre = 0;
        } else {
            squre++;
        }

        for (var i = 0; i < olList.length; i++) {
            olList[i].className = "";

        }
        olList[squre].className = "current";

    }

//    4.3 给左箭头加点击事件
    arrleft.onclick = function () {
        if (pic == 0) {
            pic = ulList.length - 1;
            ul.style.left = -pic * imgWidth + "px";
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ul, {"left":target});


        //    小方块同步问题
        if (squre == 0) {
            squre = olList.length - 1;
        } else {
            squre--;
        }
        for (var i = 0; i < olList.length; i++) {
            olList[i].className = "";
        }
        olList[squre].className = "current";


    }
//5. 自动播放的功能
        timer = setInterval(function () {
            arrright.click();
        }, 2000);
//    5.2;鼠标经过停止
//    5.3鼠标离开继续

//    //6解决bug
//    小方块同步问题
// 5.3 移动到小方块的时候，同步问题
}

// 突出显示

// star_zqfather 的突出展示
$(function () {
    //给star_zqfather 下的li注册mouseenter事件
    $("#star_zqfather>ul>li").mouseenter(function () {
        $(this).css("opacity","1").siblings().css("opacity","0.4")
    })
    //给star_zqfather注册mouseleave事件
    $("#star_zqfather").mouseleave(function () {
        $(this).find("li").css("opacity","1");
    })
})



//tab   切换
$(function () {
    //1给b1注册 鼠标经过和离开事件)
    $("#topb b").mouseenter(function () {
        $(this).addClass("yzyred").siblings().removeClass("yzyred");

        var idx = $(this).index();

        // $(" #topb .topb-imgfather").eq(idx).addClass("currentblock").siblings().removeClass("currentblock");
        if(idx==1){
            $("#topb .topb-imgfather").css("display","block");
            $("#topb .topb-imgfather1").css("display","none");
        }
        if(idx==2){
            $("#topb .topb-imgfather").css("display","none");
            $("#topb .topb-imgfather1").css("display","block");
        }
    })
})/**
 * Created by Administrator on 2016/8/30 0030.
 */
