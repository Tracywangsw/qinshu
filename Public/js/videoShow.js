$(document).ready(function(){
	var scoreList = $("#getscoreList").text();
	var list = scoreList.split(";");
	for(i = 0;i<list.length;i++){
		var add = "<li><img src='"+ list[i] +"' title='曲谱部分"+ (i+1) + "'/></li>";
		$(".showPic ul").append(add);
	}
})