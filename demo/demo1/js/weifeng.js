
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name]
	}
	else
	{
		return getComputedStyle(obj,false)[name]
	}
}

function getByClass(oParent,nClass)
{
	var eLe = oParent.getElementsByTagName('*');
	var aRrent  = [];
	for(var i=0; i<eLe.length; i++)
	{
		if(eLe[i].className == nClass)
		{
			aRrent.push(eLe[i]);
		}
	}
	return aRrent;
}

function startMove(obj,att,add)
{
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
	   var cutt = 0 ;
	   if(att=='opacity')
	   {
		   cutt = Math.round(parseFloat(getStyle(obj,att)));
	   }
	   else
	   {
		   cutt = Math.round(parseInt(getStyle(obj,att)));
	   }
	   var speed = (add-cutt)/4;
	   speed = speed>0?Math.ceil(speed):Math.floor(speed);
	   if(cutt==add)
	   {
		   clearInterval(obj.timer)
	   }
	   else
	   {
		   if(att=='opacity')
		   {
			   obj.style.opacity = (cutt+speed)/100;
			   obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
		   }
		   else
		   {
			   obj.style[att] = cutt+speed+'px';
		   }
	   }
	   
	},30)
}

  window.onload = function()
  {
	  var oDiv = document.getElementById('playBox');
	  var oPre = getByClass(oDiv,'pre')[0];
	  var oNext = getByClass(oDiv,'next')[0];
	  var oUlBig = getByClass(oDiv,'oUlplay')[0];
	  var aBigLi = oUlBig.getElementsByTagName('li');
	  var oDivSmall = getByClass(oDiv,'smalltitle')[0]
	  var aLiSmall = oDivSmall.getElementsByTagName('li');
	  
	  function tab()
	  {
	     for(var i=0; i<aLiSmall.length; i++)
	     {
		    aLiSmall[i].className = '';
	     }
	     aLiSmall[now].className = 'thistitle'
	     startMove(oUlBig,'left',-(now*aBigLi[0].offsetWidth))
	  }
	  var now = 0;
	  for(var i=0; i<aLiSmall.length; i++)
	  {
		  aLiSmall[i].index = i;
		  aLiSmall[i].onclick = function()
		  {
			  now = this.index;
			  tab();
		  }
	 }
	  oPre.onclick = function()
	  {
		  now--
		  if(now ==-1)
		  {
			  now = aBigLi.length;
		  }
		   tab();
	  }
	   oNext.onclick = function()
	  {
		   now++
		  if(now ==aBigLi.length)
		  {
			  now = 0;
		  }
		  tab();
	  }
	  var timer = setInterval(oNext.onclick,3000) //滚动间隔时间设置
	  oDiv.onmouseover = function()
	  {
		  clearInterval(timer)
	  }
	   oDiv.onmouseout = function()
	  {
		  timer = setInterval(oNext.onclick,3000) //滚动间隔时间设置
	  }
  }
  //显示图片下的文字信息
function showfont(i){

	   document.getElementById("fontshow"+i).style.display="block";
	  }
function hidefont(i){

	    document.getElementById("fontshow"+i).style.display="none";
}



function box(){
	document.getElementById("pro").style.display="block";
}
function demo(){
	document.getElementById("pro").style.display="none";
}

   
   function add(i){
	   var n=parseInt(document.getElementById("num"+i).innerHTML);
	   var c=document.getElementById("pic"+i).innerHTML;
	   n++;
	   document.getElementById("num"+i).innerHTML=n;
	   if(c!='★★★★★★'){
		   document.getElementById("pic"+i).innerHTML+='★';
	   }
	   else if(c=='★★★★★★'){
		   document.getElementById("pic"+i).innerHTML='★★★★★★';
	   }
   }
 
  
//以下是显示和隐藏医生信息
function showdoctor(i)
{
	document.getElementById("list-up"+i).style.display="block";	
	}
function hidedoctor(i)
{
	document.getElementById("list-up"+i).style.display="none";
	}

//以下是显示tab菜单
function showtab(n)
{   if(n<10){
	     for(var i=1;i<6;i++)
	        {
                 if(n==i)
	              document.getElementById("tabshow"+i).style.display="block";
	             else 
	              document.getElementById("tabshow"+i).style.display="none";
	        }
     }
    else if(n>10&&n<20){
           	for(var i=11;i<16;i++)
	           {
                 if(n==i)
	             document.getElementById("tabshow"+i).style.display="block";
	             else 
	             document.getElementById("tabshow"+i).style.display="none";
	           }
     }
	     else if(n>20&&n<30){
           	for(var i=21;i<26;i++)
	           {
                 if(n==i)
	             document.getElementById("tabshow"+i).style.display="block";
	             else 
	             document.getElementById("tabshow"+i).style.display="none";
	           }
     }
	     else if(n>30){
           	for(var i=31;i<36;i++)
	           {
                 if(n==i)
	             document.getElementById("tabshow"+i).style.display="block";
	             else 
	             document.getElementById("tabshow"+i).style.display="none";
	           }
     }
   
}
//友情链接和热门医院的切换
function showfoot(){
	  document.getElementById("friend").style.display="block";
	  document.getElementById("hosepity").style.display="none";
}
function showfoot1(){
	 document.getElementById("friend").style.display="none";
	 document.getElementById("hosepity").style.display="block";
}