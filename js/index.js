var count=document.getElementById("count");
for(var i=1;i<6;i++)
	count.innerHTML+="<div class='num' style='animation: count 2s "+(6-i)+"s forwards;'>"+i+"</div>";
count.innerHTML+="<div class='num' id='zero'>0</div>";
setTimeout(function(){
	count.lastChild.style.animation="shake 0.1s infinite";
},7000);
