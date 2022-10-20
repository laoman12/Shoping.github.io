var NowFrame = 1;
var MaxFrame = 3;

function show() {
	for (var i = 1; i < (MaxFrame + 1); i++) {
		if (i == NowFrame)
			document.getElementById('div' + NowFrame).style.display =''; //当前图片显示
		else
			document.getElementById('div' + i).style.display = 'none'; //其他的图片隐藏
	} {
		if (NowFrame == MaxFrame) //定义下一张显示的图片
			NowFrame = 1;
		else
			NowFrame++;
	}
	theTimer = setTimeout('show()', 2000); //设置定时器，显示下一张显示的图片
}











// window.addEventListener('load',function(){
// 	var focus=document.querySelector('.jinitaimei');
// 	var arrow_1=document.querySelector('.arrow-1');
//  	var arrow_r=document.querySelector('.arrow-r');

// }
