$(function(){
/*一.banner层级轮播开始-----------------------------------------------------------------------*/
	
	//1. 获取元素
	var imgs=$(".banner");
	var win=$(".window")[0];
	var cirs=$("li",$(".cirs")[0]);
	var button=$(".button")[0];
	var btnL=$(".btnL")[0];
	var btnR=$(".btnR")[0];
	var s=$(".s")[0];

	// 2.状态初始化
	imgs[0].style.zIndex=1;
	cirs[0].style.background="#E5004F";

	// 3.定义当前图片是哪一张
	var n=0;

	// 4.时间间隔函数
	var t=setInterval(move,2000);

	// 5.moveR函数
	function move(type){
		var type=type||"r";
		if(type=="r"){
			// 更新状态
			n++;

			// 处理下标越界问题
			if(n==imgs.length){
				n=0;
			}
		}
		if(type=="l"){
			n--;
			if(n<0){
				n=imgs.length-1;
			}
		}
		
		// 遍历将所有图片透明度设为0
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0});
			cirs[i].style.background="#211616";
		}
		animate(imgs[n],{opacity:1},function(){
			flag=true;
		});
		cirs[n].style.background="#E5004F";
	}

	// 6.鼠标移入轮播停止
	win.onmouseover=function(){
		clearInterval(t);
		button.style.display="block";
	}

	// 7.鼠标移出轮播继续
	win.onmouseout=function(){
		t=setInterval(move,2000);
		button.style.display="none";
	}

	var flag=true;
	// 8.鼠标移到轮播条上对应图片显示出来
	for(var j=0;j<cirs.length;j++){
		cirs[j].index=j;
		cirs[j].onmouseover=function(){
			if(flag){
				flag=false;
				for(var i=0;i<imgs.length;i++){
					animate(imgs[i],{opacity:0});
					cirs[i].style.background="#211616";
				}
				animate(imgs[this.index],{opacity:1},function(){
					flag=true;
				});
				cirs[this.index].style.background="#E5004F";
				n=this.index;
			}
		}
	}

	// 9.点击左右按钮执行的函数
	btnL.onclick=function(){
		if(flag){
			flag=false;
			move("l");
		}
	}
	btnR.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}

	// 10.小banner移动
	s.onmouseover=function(){
		animate(s,{right:90});
	}
	s.onmouseout=function(){
		animate(s,{right:80});
	}

/*banner层级轮播结束---------------------------------------------------------------------*/


/*二.推荐--->选项卡开始--------------------------------------------------------------------------*/
		// 1.获取元素
		var column=$(".column");
		var list=$(".list");
		var sanj=$(".sanj");
		var term=$(".term");

		// 2.状态初始化
		list[2].style.zIndex=1;
		sanj[2].style.display="block";
		term[2].style.borderBottom="5px solid #E5004F";
		term[2].style.fontWeight="bold"; 

		// 3.鼠标移入事件
		// 遍历栏目标题
		for(var i=0;i<column.length;i++){
			column[i].index=i;
			column[i].onmouseover=function(){
				for(var j=0;j<list.length;j++){
					list[j].style.zIndex=0;
					sanj[j].style.display="none";
					term[j].style.borderBottom="5px solid #333";
					term[j].style.fontWeight="normal"; 
				}
				list[this.index].style.zIndex=1;
				sanj[this.index].style.display="block";
				term[this.index].style.borderBottom="5px solid #E5004F";
				term[this.index].style.fontWeight="bold"; 
			}
		}
	

/*推荐--->选项卡结束--------------------------------------------------------------------------*/



/*二.银泰百货--->选项卡开始--------------------------------------------------------------------------*/
		// 1.获取元素
		var columnn=$(".columnn");
		var listt=$(".listt");
		var sanjj=$(".sanjj");
		// var termm=$(".termm");

		// 2.状态初始化
		listt[0].style.zIndex=1;
		sanjj[0].style.display="block";
		columnn[0].style.borderBottom="3px solid #E5004F";
		columnn[0].style.fontWeight="bold"; 

		// 3.鼠标移入事件
		// 遍历栏目标题
		for(var i=0;i<columnn.length;i++){
			columnn[i].index=i;
			columnn[i].onmouseover=function(){
				for(var j=0;j<listt.length;j++){
					listt[j].style.zIndex=0;
					sanjj[j].style.display="none";
					columnn[j].style.borderBottom="3px solid #333";
					columnn[j].style.fontWeight="normal"; 
				}
				listt[this.index].style.zIndex=1;
				sanjj[this.index].style.display="block";
				columnn[this.index].style.borderBottom="3px solid #E5004F";
				columnn[this.index].style.fontWeight="bold"; 
			}
		}


/*银泰百货--->选项卡结束--------------------------------------------------------------------------*/




/*三.线开始-------------------------------------------------------------------------------------------*/
// 获取元素
	var xian=$(".xian");
	
	for(var i=0;i<xian.length;i++){
		line(xian[i]);
	}

/*线结束-------------------------------------------------------------------------------------------*/

/*四.楼层双下标轮播开始-------------------------------------------------------------------------------*/
var sxb=$(".sxb");

for(var i=0;i<sxb.length;i++){
	if(i==1||i==2){
		continue;
	}
	shuang(sxb[i]);
}


function shuang(obj){
	// 1.获取元素
	var pics=$("img",obj);
	var yuans=$(".cir",obj);
	// console.log(yuans);
	var an=$(".btn",obj)[0];
	var anL=$(".btnL",obj)[0];
	var anR=$(".btnR",obj)[0];
	var kuan=parseInt(getStyle(pics[0],"width"));
	
	
	// 2.状态初始化
	// (1)图片位置
	for(var i=0;i<pics.length;i++){
		if(i==0){
			continue;
		}
		pics[i].style.left=kuan+"px";
	}
	// (2)小点背景颜色
	yuans[0].style.background="#CF0048";


	// 3.记录下标
	var index=0;		//当前显示的图片
	var next=0;			//接下来会显示的图片

	// 4.鼠标移入窗口按钮出现
	obj.onmouseover=function(){
		an.style.display="block";
	}

	// 5.鼠标移出窗口按钮消失
	obj.onmouseout=function(){
		an.style.display="none";
	}

	// 6.move函数
	// (1)点击右按钮执行的函数
	function dongR(){
		// 更新下标
		next++;

		// 判断边界
		if(next==pics.length){
			next=0;
		}
		
		// 动画执行之前先让下一张图片就位
		pics[next].style.left=kuan+"px";
		
		// 小点背景颜色随图片运动而变化
		yuans[index].style.background="#6E6E6E";
		yuans[next].style.background="#CF0048";
		
		// 动画执行
		animate(pics[index],{left:-kuan});
		animate(pics[next],{left:0},function(){
			sflag=true;
		});

		// 动画执行完后更新下标
		index=next;
	}


	// (2)点击左按钮执行的函数
	function dongL(){
		// 更新下标
		next--;

		// 判断边界	
		if(next<0){
			next=pics.length-1;
		}
		
		// 动画执行之前先让下一张图片就位
		pics[next].style.left=-kuan+"px";
		
		// 小点背景颜色随图片运动而变化
		yuans[index].style.background="#6E6E6E";
		yuans[next].style.background="#CF0048";
		

		// 动画执行
		animate(pics[index],{left:kuan});
		animate(pics[next],{left:0},function(){
			sflag=true;
		});
	
		// 动画执行完后更新下标
		index=next;
	}

	// 7.定义开关
	var sflag=true;

	// 8.给右按钮添加点击事件
	anR.onclick=function(){
		if(sflag){
			sflag=false;
			dongR();
		}
	}		

	// 9.给左按钮添加点击事件
	anL.onclick=function(){
		if(sflag){
			sflag=false;
			dongL();
		}
	}

	// 10.给小点添加点击事件(选项卡)
	for(var i=0;i<yuans.length;i++){
		yuans[i].index=i;
		yuans[i].onclick=function(){
			// (1)当前显示的图片和点击的小点一致时，不执行下面的动画
			if(this.index==index){
				return;		//停止并跳出当前函数，不执行后面的函数体
			}
			
			// (2)动画执行前让小点就位
			// A.当前小点为灰色
			yuans[index].style.background="#6E6E6E";
			// B.点击的小点为红色pic
			yuans[this.index].style.background="#CF0048";
			
			// (3)分情况判断点击不同方向的小点时，动画执行的方向不同
			if(this.index>index){
				// A.动画执行前让图片就位
				pics[this.index].style.left=kuan+"px";
				// B.动画执行
				animate(pics[index],{left:-kuan});
				animate(pics[this.index],{left:0},function(){
					sflag=true;
				});
			}	
			if(this.index<index){
				// A.动画执行前让图片就位
				pics[this.index].style.left=-kuan+"px";
				// B.动画执行：
				animate(pics[index],{left:kuan});
				animate(pics[this.index],{left:0},function(){
					sflag=true;
				});
			}		
			
			
			// (4)动画执行完后更新下标：
			// this.index--->代表点的那个
			// index--->代表当前显示的
			next=this.index;
			index=this.index;
		}
	}
}
/*楼层双下标轮播结束-----------------------------------------------------------------------------------------------------------------------*/ 

/*五.楼层节点轮播开始-------------------------------------------------------------*/
	var dHz=$(".nodelb");

	for(var i=0;i<dHz.length;i++){
		nodelb(dHz[i]);
	}

	function nodelb(obj){
		// (一)获取元素
		// 1.动的盒子
		var hz=$(".hz",obj)[0];
	
		// 2.节点的宽度
		var nk=parseInt(getStyle(($("li",hz)[0]),"width"));
	
		// 3.左右	箭头
		var jtL=$(".jtL",obj)[0];
		var jtR=$(".jtR",obj)[0];
	
	
		// (二)函数
		// 1.tuiL函数(点击左按钮--->向右动)
		function tuiR(){
			// 把最后一个子节点放到盒子的最前面
			var last=getLast(hz);
			appendBefore(last,hz);
			hz.style.left=-nk+"px";
			animate(hz,{left:0},300,function(){
				nflag=true;
			});
		}

		// 2.tuiR函数(点击右按钮--->向左动)
		function tuiL(){
			var first=getFirst(hz);
			animate(hz,{left:-nk},300,function(){
				hz.appendChild(first);
				hz.style.left=0;
				nflag=true;
			});
		}

		// (三)点击事件 
		// 1.定义开关
		var nflag=true;
	
		// 2.添加点击左箭头的事件
		jtL.onclick=function(){
			if(nflag){
				nflag=false;
				tuiR();
			}
		}
		// 3.添加点击右箭头的事件
		jtR.onclick=function(){
			if(nflag){
				nflag=false;
				tuiL();
			}
		}
	}
/*楼层节点轮播结束-------------------------------------------------------------*/


/*六.楼层跳转开始---------------------------------------------------------------------*/ 
// (一)获取元素
	// 1.浏览器窗口的高度
	var ch=document.documentElement.clientHeight;

	// 2.获取每个楼层
	var floors=$(".floor");

	// 3.获取每个楼层距离最顶端的高度
	// (1)定义一个空数组，用于保存每个楼层距离最顶端的高度
	var floorArr=[];
	// (2)遍历每个楼层
	for(var i=0;i<floors.length;i++){
		floorArr.push(floors[i].offsetTop);
	}

	// 4.获取右导航
	var rightsidebar=$(".rightsidebar")[0];

	// 5.获取楼层按钮
	var dump=$("a",rightsidebar);
	var words=$(".word");
	
	// 6.获取置顶按钮
	var top=$(".term10")[0];
	

// (二)状态初始化
	rightsidebar.style.opacity=0;

// (三)定义开关
	var lflag=true;
	var bflag=true;

// (四)给window添加鼠标滚轮滑动的事件

	window.onscroll=function(){
		// 1.判断浏览器做兼容
		var obj=document.body.scrollTop?document.body:document.documentElement;
		// 2.实时获取滚动条距离最顶端的位置
		var scrolltop=obj.scrollTop;

		// 鼠标滚动到一定程度，出现搜索框
		if(scrolltop>=1100){
			if(lflag){
				lflag=false;
				animate(rightsidebar,{opacity:1});
			}
		}else{
			if(!lflag){
				lflag=true;
				animate(rightsidebar,{opacity:0});
			}
		}

		if(!bflag) return;
		// 滚动时让相应楼层的图片变成字
		for(var i=0;i<floors.length;i++){
			if(ch+scrolltop>=floorArr[i]+500){
				for(var j=0;j<words.length;j++){
					words[j].style.display="none";
				}
				words[i].style.display="block";
			}
		}
	}

// (五)鼠标经过每个按钮时，图片变成字
	for(var i=0;i<dump.length;i++){
		dump[i].index=i;
		dump[i].onmouseover=function(){
			for(var j=0;j<words.length;j++){
				words[j].style.display="none";
			}
			words[this.index].style.display="block";
		}
		dump[i].onmouseout=function(){
			for(var j=0;j<words.length;j++){
				words[j].style.display="none";
			}
		}
	}



// (六)遍历按钮添加点击事件
	for(var i=0;i<dump.length;i++){
		dump[i].index=i;
		dump[i].onclick=function(){
			bflag=false;
			for(var j=0;j<words.length;j++){
				words[j].style.display="none";
			}
			words[this.index].style.display="block";
			
			animate(document.body,{scrollTop:floorArr[this.index]},function(){
				bflag=true;
			});
			animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){
				bflag=true;
			});
		}
	}

// (七)给置顶按钮添加点击回到顶部的事件(会经过每个楼层)
	top.onclick=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		animate(obj,{scrollTop:0});
	}

/*楼层跳转结束---------------------------------------------------------------------*/ 


/*七.banner--->选项卡开始--------------------------------------------------------------------------*/
	
	// 1.获取元素
	var tiao=$(".tiao");
	var detail=$(".detail");
	
	// 2.鼠标移入事件
	// 遍历栏目标题
	for(var i=0;i<tiao.length;i++){
		tiao[i].index=i;
		tiao[i].onmouseover=function(){
			detail[this.index].style.display="block";
		}
		tiao[i].onmouseout=function(){
			detail[this.index].style.display="none";
		}
	}

/*banner--->选项卡结束--------------------------------------------------------------------------*/


/*八.mainnav鼠标经过出现红色下边框开始--------------------------------------------------------------*/
// 1.获取元素
var mainnav=$(".mainnav")[0];
var middle=$(".middle",mainnav)[0];
var hongs=$(".red",mainnav);
var mains=$("a",middle);

for(var i=0;i<mains.length;i++){
	mains[i].index=i;
	mains[i].onmouseover=function(){
		for(var j=0;j<hongs.length;j++){
			hongs[j].style.display="none";
		}
		hongs[this.index].style.display="block";
	}
	
}
/*mainnav鼠标经过出现红色下边框结束--------------------------------------------------------------*/



/*九.鼠标经过透明度降低开始-------------------------------------------------------------------*/
// 1.推荐区域
var opas=$(".listt")[0];
var opa=$("a",opas);
console.log(opa.length);

for(var i=0;i<opa.length;i++){
	opa[i].index=i;
	opa[i].onmouseover=function(){
		opa[this.index].style.opacity=0.7;
	}
	opa[i].onmouseout=function(){
		opa[this.index].style.opacity=1;
	}
}


// 2，底部银泰卡
var cards=$("a",$(".yt_card")[0]);
console.log(cards.length);
for(var i=0;i<cards.length;i++){
	cards[i].index=i;
	cards[i].onmouseover=function(){
		cards[this.index].style.opacity=0.7;
	}
	cards[i].onmouseout=function(){
		cards[this.index].style.opacity=1;
	}
}




/*鼠标经过透明度降低结束-------------------------------------------------------------------*/


});