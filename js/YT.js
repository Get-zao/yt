window.onload=function(){
	var imgs=$('.i3');
	var cir=$('.two');
	var bj=$('.beijing');
	var box=$('.banner-T')[0];
	var right=$('.Left')[0];
	var left=$('.Right')[0];
	var width=parseInt(getStyle(box,'width'));
	var t=setInterval(lunbo,2500);
	var n=0;
	function lunbo(){
		n++;
		if(n>=imgs.length){
			n=0;
		}	
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.display='none';
			// bj[i].style.display='none';
			animate(imgs[i],{display:'none'},800);
			animate(imgs[i],{opacity:0},800);
			animate(bj[i],{display:'none'},800);
			animate(bj[i],{opacity:0},800);
			cir[i].style.backgroundColor='rgba(33,22,22,0.6)';
		}

		// imgs[n].style.display='block';
		// bj[n].style.display='block';
			animate(imgs[n],{display:'block'},800);
			animate(imgs[n],{opacity:1},800);
			animate(bj[n],{display:'block'},800);
			animate(bj[n],{opacity:1},800);
			cir[n].style.backgroundColor='#E72487';
	}
	box.onmouseover=function(){
		clearInterval(t)
		right.style.display='block';
		left.style.display='block';
	}
// }
	box.onmouseout=function(){
		
		t=setInterval(lunbo,2500);
		right.style.display='none';
		left.style.display='none';
	}
	right.onclick=function(){
			lunbo();
		}
	left.onclick=function(){
		n--;
		if(n<0){
			n=imgs.length-1;
		}	
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.display='none';
			// bj[i].style.display='none';
			animate(imgs[i],{display:'none'},800);
			animate(imgs[i],{opacity:0},800);
			animate(bj[i],{display:'none'},800);
			animate(bj[i],{opacity:0},800);
			cir[i].style.backgroundColor='rgba(33,22,22,0.6)';
		}

		// imgs[n].style.display='block';
		// bj[n].style.display='block';
			animate(imgs[n],{display:'block'},800);
			animate(imgs[n],{opacity:1},800);
			animate(bj[n],{display:'block'},500);
			animate(bj[n],{opacity:1},800);
			cir[n].style.backgroundColor='#E72487';
	}
	for(var m=0;m<cir.length;m++){
		cir[m].index=m;
		cir[m].onclick=function(){
			for(var j=0;j<cir.length;j++){
			cir[j].style.background='rgba(33,22,22,0.6)';
			// bj[j].style.display='none';
			// imgs[j].style.display='none';
			animate(imgs[j],{display:'none'},800);
			animate(imgs[j],{opacity:0},800);
			animate(bj[j],{display:'none'},800);
			animate(bj[j],{opacity:0},800);
		}
		cir[this.index].style.background='#E72487';
		// bj[this.index].style.display='block';
		// imgs[this.index].style.display='block';
			animate(imgs[this.index],{display:'block'},800);
			animate(imgs[this.index],{opacity:1},800);
			animate(bj[this.index],{display:'block'},500);
			animate(bj[this.index],{opacity:1},800);
		n=this.index;
		}
	}
function fengzhuang(obj){
	var obj=obj;
	var Box=$('.bottom-T')[obj];
	var Img=getClass('I1',Box);
	// console.log(Img);
	var Cir=getClass('Two',Box);
	var cc=$('.cri')[obj];
	var Left=$('.LL')[obj];
	var Right=$('.RR')[obj];
	var width=parseInt(getStyle(Box,'width'));
	var m=0;
	var next=0;
	// var time=setInterval(Move,1500)
	function Move(){
		next=m+1;
		if(next>=Img.length){
			next=0;
		}
		Img[next].style.left=width+'px';
		animate(Img[m],{left:-width},600);
		animate(Img[next],{left:0},600);
		Cir[m].style.background='rgba(33,22,22,0.9)';
		Cir[next].style.background='#E72487';
		m=next;	
	}
		Box.onmouseover=function(){
			Right.style.display='block';
			Left.style.display='block';
			cc.style.display='block';
			// clearInterval(time);
		}
		Box.onmouseout=function(){
			Right.style.display='none';
			Left.style.display='none';
			cc.style.display='none';
			// time=setInterval(Move,1500);
		}
		Right.onclick=function(){
			Move(0);
		}
		Left.onclick=function(){
			next=m-1;
		if(next<0){
			next=Img.length-1;
		}
		Img[next].style.left=-width+'px';
		animate(Img[m],{left:width},600);
		animate(Img[next],{left:0},600);
		cir[m].style.background='rgba(33,22,22,0.8)';
		cir[next].style.background='#E72487';
		m=next;
		}
		for(var i=0;i<Cir.length;i++){
			Cir[i].index=i;
			Cir[i].onclick=function(){
				if(this.index>m){
					Img[this.index].style.left=width+'px';
					animate(Img[m],{left:-width},600);
					animate(Img[this.index],{left:0},600);
					Cir[m].style.background='rgba(33,22,22,0.8)';
					Cir[this.index].style.background='#E72487';
					m=this.index;
				}else{
					Img[this.index].style.left=-width+'px';
					animate(Img[m],{left:width},600);
					animate(Img[this.index],{left:0},600);
					Cir[m].style.background='rgba(33,22,22,0.8)';
					Cir[this.index].style.background='#E72487';
					m=this.index;
				}
			}
		}
	}
	fengzhuang(0);
	fengzhuang(1);
	fengzhuang(2);
	fengzhuang(3);
	fengzhuang(4);
	fengzhuang(5);
	fengzhuang(6);
	fengzhuang(7);
	fengzhuang(8);



	var floor=$('.classify');
	var floor_nav1=$('.r-nav1')[0];
	var floor_li1=$('.floor-li',floor_nav1);
	var lou=$('.lou',floor_nav1);
	var zi=$('.zi',floor_nav1);
	var cHeight=document.documentElement.clientHeight;
	var flag=1;
	var flag1=1;
	var n;
	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var a=obj.scrollTop;
		var top=floor[0].offsetTop;
			if(a>top-900){
				if(flag){
					flag=0;
					floor_nav1.style.display='block';
						flag1=1;
					}
			}
			if(a<top-900){
				if(flag1){
					flag1=0;
					floor_nav1.style.display='none';
						flag=1;
					}
			}
		var a=obj.scrollTop;
		var top=floor[0].offsetTop;
		for(var i=0;i<floor.length;i++){
				 floor[i].h=floor[i].offsetTop;
				if(a>=floor[i].h-400){
					for(var m=0;m<floor_li1.length;m++){
						lou[m].style.display='block';
						zi[m].style.display='none';
					}
					lou[i].style.display='none';
					zi[i].style.display='block';
				}
			}
			for(var i=0;i<floor_li1.length;i++){
				floor_li1[i].index=i;
				floor_li1[i].onclick=function(){
					animate(document.body,{scrollTop:floor[this.index].h-300})
					animate(document.documentElement,{scrollTop:floor[this.index].h-300})
					n=this.index;
				}
				floor_li1[i].onmouseover=function(){
					lou[this.index].style.display='none';
						zi[this.index].style.display='block';
				}
				floor_li1[i].onmouseout=function(){
					if(n==this.index){
						return;
					}
					lou[this.index].style.display='block';
					zi[this.index].style.display='none';
				}
			}
	}




	var bb=$('.ewm')[0];
	var box1=$('#box1');
		hover(box1,function(){
			box1.style.background='#fff';
			bb.style.display='block';
		},
		function(){
			box1.style.background='#EEEEEE';
			bb.style.display='none';
		})
	var BB=$('.ewm1')[0];
	var box2=$('#box2');
		hover(box2,function(){
			box2.style.background='#fff';
			BB.style.display='block';
		},
		function(){
			box2.style.background='#EEEEEE';
			BB.style.display='none';
		})
	var Hide=$('.Hide')[0];
	var BOX=$('.BOX')[0];
		hover(Hide,function(){
			Hide.style.background='#fff';
			BOX.style.display='block';
		},
		function(){
			Hide.style.background='#EEEEEE';
			BOX.style.display='none';
		})	
	function  nav_left(n){
	var da=$('.da')[n];
	var one=$('.over')[n];
	// console.log(one);
		hover(da,function(){
			one.style.display='block';
		},
		function(){
			one.style.display='none';
		})
	}
	nav_left(0);
	nav_left(1);
	nav_left(2);
	nav_left(3);
	nav_left(4);
	nav_left(5);
	nav_left(6);
	nav_left(7);
	nav_left(8);
	nav_left(9);


	var nav=document.getElementsByClassName('TOP');
	//console.log(nn);
	for(var i=0;i<nav.length;i++){
		nav[i].index=i;	
		nav[i].onmouseover=function(){
			for(var a=0;a<nav.length;a++){
				nav[a].className='TOP';	
			};
			this.className='TOP top1';
			var mm=document.getElementsByClassName('bottom1');
			for(var j=0;j<mm.length;j++){
				mm[j].className='bottom1';
			};
			mm[this.index].className='bottom1 bottom2';
		}
	}


	var Nav=document.getElementsByClassName('rmpp');
	//console.log(nn);
	for(var i=0;i<Nav.length;i++){
		Nav[i].index=i;	
		Nav[i].onmouseover=function(){
			for(var a=0;a<Nav.length;a++){
			Nav[a].className='rmpp';	
			};
			this.className='rmpp bztj';
			var mm=document.getElementsByClassName('right-B');
			for(var j=0;j<mm.length;j++){
				mm[j].className='right-B';
			};
			mm[this.index].className='right-B right-BB';
		}
	}

	function moveBorder(obj,n,m){
		var lou=$('.classify')[n];
		var move_top=$('.move-border-top',lou)[obj];
		var move_left=$('.move-border-left',lou)[obj];
		var move_bottom=$('.move-border-bottom',lou)[obj];
		var move_right=$('.move-border-right',lou)[obj];
		var kuang=$('.tu',lou)[m]
		
		kuang.onmouseover=function(){
			animate(move_top,{width:269},400);
			animate(move_left,{height:179},400);
			animate(move_bottom,{left:0},400);
			animate(move_right,{top:0},400);
		}
		kuang.onmouseout=function(){
			animate(move_top,{width:0},400);
			animate(move_left,{height:0},400);
			animate(move_bottom,{left:269},400);
			animate(move_right,{top:179},400);
		}

	}
	moveBorder(0,0,0);moveBorder(1,0,1);moveBorder(2,0,2);moveBorder(3,0,3);
	moveBorder(0,1,0);moveBorder(1,1,1);moveBorder(2,1,2);moveBorder(3,1,3);
	moveBorder(0,2,0);moveBorder(1,2,1);moveBorder(2,2,2);moveBorder(3,2,3);
	moveBorder(0,3,0);moveBorder(1,3,1);moveBorder(2,3,2);moveBorder(3,3,3);
	moveBorder(0,4,0);moveBorder(1,4,1);moveBorder(2,4,2);moveBorder(3,4,3);
	moveBorder(0,5,0);moveBorder(1,5,1);moveBorder(2,5,2);moveBorder(3,5,3);
	moveBorder(0,6,0);moveBorder(1,6,1);moveBorder(2,6,2);moveBorder(3,6,3);
	moveBorder(0,7,0);moveBorder(1,7,1);moveBorder(2,7,2);moveBorder(3,7,3);
	moveBorder(0,8,0);moveBorder(1,8,1);moveBorder(2,8,2);moveBorder(3,8,3);
	function heikuang(n){
		var lou=$('.recommend')[0];
		var m=n;
		var move_top=$('.move-border-top',lou)[n];
		var move_left=$('.move-border-left',lou)[n];
		var move_bottom=$('.move-border-bottom',lou)[n];
		var move_right=$('.move-border-right',lou)[n];
		var kuang=$('.kuang-1',lou)[m];
		kuang.onmouseover=function(){
			animate(move_top,{width:219},400);
			animate(move_left,{height:257},400);
			animate(move_bottom,{left:0},400);
			animate(move_right,{top:0},400);
		}
		kuang.onmouseout=function(){
			animate(move_top,{width:0},400);
			animate(move_left,{height:0},400);
			animate(move_bottom,{left:219},400);
			animate(move_right,{top:257},400);
		}
	}
	var fenlei=$('.recommend')[0];
	var kuang_1=$('.kuang-1',fenlei);
	for(var n=0;n<kuang_1.length;n++){
		heikuang(n);
	}
	
		function heikuang1(n){
		var lou=$('.ytbh')[0];
		var m=n;
		var move_top=$('.move-border-top',lou)[n];
		var move_left=$('.move-border-left',lou)[n];
		var move_bottom=$('.move-border-bottom',lou)[n];
		var move_right=$('.move-border-right',lou)[n];
		var kuang=$('.kuang',lou)[m];
		kuang.onmouseover=function(){
			animate(move_top,{width:197},400);
			animate(move_left,{height:254},400);
			animate(move_bottom,{left:0},400);
			animate(move_right,{top:0},400);
		}
		kuang.onmouseout=function(){
			animate(move_top,{width:0},400);
			animate(move_left,{height:0},400);
			animate(move_bottom,{left:197},400);
			animate(move_right,{top:254},400);
		}
	}
	var ytbh=$('.ytbh')[0];
	var kuang_2=$('.kuang',ytbh);
	for(var n=0;n<kuang_2.length;n++){
		heikuang1(n);
	}


function tiaozhuan(s){
	var Box=$('.classify')[s];
	var Img=$('.bot',Box);
	
	var Left=$('.zuosanjiao',Box)[0];
	var Right=$('.yousanjiao',Box)[0];
	var width=parseInt(getStyle(Img[0],'width'));
	var m=0;
	var next=0;
	function Move(){
		next=m+1;
		if(next>=Img.length){
			next=0;
		}
		Img[next].style.left=width+'px';
		animate(Img[m],{left:-width},600);
		animate(Img[next],{left:0},600);
		m=next;	
	}
		Right.onclick=function(){
			Move(0);
		}
		Left.onclick=function(){
			next=m-1;
		if(next<0){
			next=Img.length-1;
		}
		Img[next].style.left=-width+'px';
		animate(Img[m],{left:width},600);
		animate(Img[next],{left:0},600);
		m=next;
		}
	}

	var classify=$('.classify');
	for(var s=0;s<classify.length;s++){
		tiaozhuan(s);
	}
	


}
