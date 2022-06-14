// 生成图片
var str = '';
var imgWrap = document.querySelector('#imgWrap');
// querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
for (var i = 0; i < 32; i++) {
    str += '<img src="img/' + (i + 1) + '.jpg" alt="">';
}
console.log(str);
imgWrap.innerHTML = str;

//按钮点击
var imgs = imgWrap.children;
var btn = document.querySelector('#btn');

var endnum = 0; //记录图片透明度走到零的个数
var canclick = true; //用户是否可以点击


btn.onclick = function() {
    if (!canclick) { //动画正在进行中，不能点击
        return;
    }
    canclick = false;

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.animation = 'twinkle .7s ' + Math.random() * 1000 + 'ms';
        // animation 属性是一个简写属性，用于设置六个动画属性   animation-duration属性：定义动画完成一个周期所需要的时间，
        // animation-name属性：为@keyframes动画提供名称  animation-iteration-count 属性：定义动画的播放次数
        imgs[i].addEventListener('animationend', end);
        // addEventListener() 方法用于向指定元素添加事件句柄。
    }
}

//动画结束事件
function end(ev) { //透明度和旋转完都完成后进这个事件
    endnum++;

    if (ev.animationName == 'twinkle') { //这个条件成立说明现在是twinkle的end事件发生了
        this.style.opacity = 0;
        if (endnum == imgs.length) {
            //说明这个条件成立说明所有图片透明度都为0；
            rotate();

            endnum = 0;
        }

    }

    if (ev.animationName == 'rotate') {
        //这个条件成立说明现在是rotate的end事件发生了
        this.removeAttribute('style');

        if (endnum == imgs.length) { //旋转的图片都走完了
            canclick = true;
            endnum = 0;
        }
    }

}

//旋转功能（需要在所有的图片的透明度都为0的时候才开始）
function rotate() {
    //让所有的图片沿着z轴往后走
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.transform = 'rotateY(0deg) translateZ(-' + Math.random() * 500 + 'px)';
        imgs[i].style.animation = 'rotate 2s ' + Math.random() * 500 + 'ms';
    }
}

function test1() {
    alert("老谢老谢老谢！");
    var name1 = prompt("请输入‘我在’：");
    if (name1 == '我在') {
        alert("我也还在！");
    }

    var name = prompt("请输入你的名字：");
    if (name == '谢雅婷') {
        alert('生日快乐蟹不肉！！！！');
    }
}
test1();