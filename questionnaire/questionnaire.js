function plugin0() {
    return document.getElementById('plugin0');
}
plugin = plugin0;
function load(){
    plugin().SPK('8504FE760C78E1F13B5E6CF42F2D83667FC1ED661581E56EC1306282F96E5E5474DE64E7B47A883A27F5D742F9D113ADC35A61AF65FE09D1EB3E0273951585AD');	

}
function pluginLoaded() {
     // alert("Plugin loaded!");
     // if(plugin().valid){
     // 	alert('TOKEN:'+plugin().ObtainToken('')+'; MAC:'+ plugin().CAM()+'; IP:'+plugin().LADR());
     // }
}

//浏览器判断，IE浏览器提交后不返回
var userAgent = navigator.userAgent;
var isOpera = userAgent.indexOf('Opera')>-1;
var isIE;
if((userAgent.indexOf('compatible')>-1 && userAgent.indexOf('MSIE')>-1 && !isOpera) || userAgent=='Fy'){
	isIE = true;
}

//解析url里面的参数
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if(url.indexOf("?") != -1) {
        var str = url.substr(1);
        if(str.indexOf('&') != -1) {
            var strs = str.split('&');
            for(var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        } else {
            theRequest[str.split("=")[0]] = (str.split("=")[1]);
        }
    }
    return theRequest;
}
var Request = GetRequest();

// var ques = {"success":true,"recordsTotal":22,"data":[{"id":"1","optionNum":"6","questionType":"0","questionLevel":"2","questionContent":"您是否会查看财经资讯？（单选）","createTime":"2017-03-08 10:02:45","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"413","questionId":"1","optionCode":"A","optionContent":"每天查看多次"},{"id":"414","questionId":"1","optionCode":"B","optionContent":"每天查看一次"},{"id":"415","questionId":"1","optionCode":"C","optionContent":"三天左右查看一次"},{"id":"416","questionId":"1","optionCode":"D","optionContent":"每周查看一次"},{"id":"417","questionId":"1","optionCode":"E","optionContent":"每月查看一次"},{"id":"418","questionId":"1","optionCode":"F","optionContent":"基本不看，原因是"}]},{"id":"2","optionNum":"8","questionType":"1","questionLevel":"0","questionContent":"您一般阅读财经资讯的场景是哪些？（多选）","createTime":"2017-03-08 10:06:16","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"290","questionId":"2","optionCode":"A","optionContent":"起床后"},{"id":"291","questionId":"2","optionCode":"B","optionContent":"上下班路上"},{"id":"292","questionId":"2","optionCode":"C","optionContent":"开盘之前"},{"id":"293","questionId":"2","optionCode":"D","optionContent":"吃饭时"},{"id":"294","questionId":"2","optionCode":"E","optionContent":"交易时间段"},{"id":"295","questionId":"2","optionCode":"F","optionContent":"收盘后"},{"id":"296","questionId":"2","optionCode":"G","optionContent":"睡觉前"},{"id":"297","questionId":"2","optionCode":"H","optionContent":"其他"}]},{"id":"3","optionNum":"9","questionType":"1","questionLevel":"0","questionContent":"您主要使用以下哪些软件查看财经资讯？（多选）","createTime":"2017-03-08 10:25:35","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"298","questionId":"3","optionCode":"A","optionContent":"富易"},{"id":"299","questionId":"3","optionCode":"B","optionContent":"Wind资讯"},{"id":"300","questionId":"3","optionCode":"C","optionContent":"同花顺"},{"id":"301","questionId":"3","optionCode":"D","optionContent":"大智慧"},{"id":"302","questionId":"3","optionCode":"E","optionContent":"财联社"},{"id":"303","questionId":"3","optionCode":"F","optionContent":"新浪财经"},{"id":"304","questionId":"3","optionCode":"G","optionContent":"华尔街见闻"},{"id":"305","questionId":"3","optionCode":"H","optionContent":"东方财富网"},{"id":"306","questionId":"3","optionCode":"I","optionContent":"其他"}]},{"id":"4","optionNum":"4","questionType":"0","questionLevel":"2","questionContent":"您主要通过以下哪个途径获取财经类资讯？（单选）","createTime":"2017-03-08 10:27:14","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"307","questionId":"4","optionCode":"A","optionContent":"PC端（电脑客户端）"},{"id":"308","questionId":"4","optionCode":"B","optionContent":"Web端（网页）"},{"id":"309","questionId":"4","optionCode":"C","optionContent":"移动端（手机）"},{"id":"310","questionId":"4","optionCode":"D","optionContent":"其他"}]},{"id":"5","optionNum":"2","questionType":"0","questionLevel":"0","questionContent":"您平时是否使用PC端查看财经资讯？（单选）","createTime":"2017-03-08 10:28:34","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"311","questionId":"5","optionCode":"A","optionContent":"是"},{"id":"312","questionId":"5","optionCode":"B","optionContent":"否"}]},{"id":"6","optionNum":"6","questionType":"0","questionLevel":"1","questionContent":"您不使用PC端查看财经资讯的原因是？（单选）","createTime":"2017-03-08 10:29:26","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"313","questionId":"6","optionCode":"A","optionContent":"使用条件要求过高（需要在网络环境中用电脑查看）"},{"id":"314","questionId":"6","optionCode":"B","optionContent":"PC端软件需下载安装后使用，太麻烦"},{"id":"315","questionId":"6","optionCode":"C","optionContent":"PC端资讯更新或推送速度不如其他途径及时"},{"id":"316","questionId":"6","optionCode":"D","optionContent":"PC端资讯内容过于专业，不太会用到"},{"id":"317","questionId":"6","optionCode":"E","optionContent":"PC端资讯内容不能随时随地查看，不方便"},{"id":"318","questionId":"6","optionCode":"F","optionContent":"其他"}]},{"id":"7","optionNum":"8","questionType":"0","questionLevel":"2","questionContent":"您会在什么时间段在电脑上阅读财经资讯？（单选）","createTime":"2017-03-08 10:30:53","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"319","questionId":"7","optionCode":"A","optionContent":"7：00-9：00"},{"id":"320","questionId":"7","optionCode":"B","optionContent":"9：00 -11：30"},{"id":"321","questionId":"7","optionCode":"C","optionContent":"11：30 - 13：00"},{"id":"322","questionId":"7","optionCode":"D","optionContent":"13：00 -15：00"},{"id":"323","questionId":"7","optionCode":"E","optionContent":"15：00 - 18：00"},{"id":"324","questionId":"7","optionCode":"F","optionContent":"18：00-20：00"},{"id":"325","questionId":"7","optionCode":"G","optionContent":"20：00-22：00"},{"id":"326","questionId":"7","optionCode":"H","optionContent":"想起来就看"}]},{"id":"8","optionNum":"6","questionType":"0","questionLevel":"2","questionContent":"在电脑上阅读财经资讯时，您更喜欢哪一种形式的财经资讯？（单选）","createTime":"2017-03-08 10:36:36","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"327","questionId":"8","optionCode":"A","optionContent":"纯文字"},{"id":"328","questionId":"8","optionCode":"B","optionContent":"图文类"},{"id":"329","questionId":"8","optionCode":"C","optionContent":"语音类"},{"id":"330","questionId":"8","optionCode":"D","optionContent":"视频录播类"},{"id":"331","questionId":"8","optionCode":"E","optionContent":"视频直播类"},{"id":"332","questionId":"8","optionCode":"F","optionContent":"其他"}]},{"id":"9","optionNum":"8","questionType":"1","questionLevel":"1","questionContent":"在电脑上，您主要关注哪些方面的财经资讯？（多选）","createTime":"2017-03-08 10:37:53","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"419","questionId":"9","optionCode":"A","optionContent":"宏观资讯 （国内外财经、政策）"},{"id":"420","questionId":"9","optionCode":"B","optionContent":"股市盘面信息 （走势、热点）"},{"id":"421","questionId":"9","optionCode":"C","optionContent":"个股相关信息 （盘面、历史、财务）"},{"id":"422","questionId":"9","optionCode":"D","optionContent":"其他投资产品 （债券、期货、衍生品）"},{"id":"423","questionId":"9","optionCode":"E","optionContent":"知识教育类（选股策略、打新股技巧）"},{"id":"424","questionId":"9","optionCode":"F","optionContent":"机构分析"},{"id":"425","questionId":"9","optionCode":"G","optionContent":"生活娱乐类"},{"id":"426","questionId":"9","optionCode":"H","optionContent":"其他"}]},{"id":"10","optionNum":"5","questionType":"1","questionLevel":"0","questionContent":"您主要阅读哪方面的宏观资讯？（多选）","createTime":"2017-03-08 10:39:14","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"340","questionId":"10","optionCode":"A","optionContent":"宏观资讯 "},{"id":"341","questionId":"10","optionCode":"B","optionContent":"政府调控"},{"id":"342","questionId":"10","optionCode":"C","optionContent":"国外财经要闻"},{"id":"343","questionId":"10","optionCode":"D","optionContent":"行业板块"},{"id":"344","questionId":"10","optionCode":"E","optionContent":"其他"}]},{"id":"11","optionNum":"5","questionType":"1","questionLevel":"0","questionContent":"您主要阅读哪方面的盘面资讯？（多选）","createTime":"2017-03-08 10:40:12","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"345","questionId":"11","optionCode":"A","optionContent":"大盘股票走势解读"},{"id":"346","questionId":"11","optionCode":"B","optionContent":"盘面技术分析"},{"id":"347","questionId":"11","optionCode":"C","optionContent":"外盘走势解读"},{"id":"348","questionId":"11","optionCode":"D","optionContent":"实时热点板块"},{"id":"349","questionId":"11","optionCode":"E","optionContent":"其他"}]},{"id":"12","optionNum":"6","questionType":"1","questionLevel":"1","questionContent":"您主要了解哪方面的个股相关资讯？（多选）","createTime":"2017-03-08 10:40:55","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"350","questionId":"12","optionCode":"A","optionContent":"个股公告"},{"id":"351","questionId":"12","optionCode":"B","optionContent":"个股研报及解读"},{"id":"352","questionId":"12","optionCode":"C","optionContent":"个股技术面分析（K线分析、技术指标分析）"},{"id":"353","questionId":"12","optionCode":"D","optionContent":"个股技术面分析（财务状况、盈利预期）"},{"id":"354","questionId":"12","optionCode":"E","optionContent":"政策、经济形势对个股影响"},{"id":"355","questionId":"12","optionCode":"F","optionContent":"其他"}]},{"id":"13","optionNum":"2","questionType":"0","questionLevel":"2","questionContent":"您是否在富易上阅读财经资讯？（单选）","createTime":"2017-03-08 10:41:45","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"356","questionId":"13","optionCode":"A","optionContent":"是"},{"id":"357","questionId":"13","optionCode":"B","optionContent":"否"}]},{"id":"14","optionNum":"5","questionType":"0","questionLevel":"1","questionContent":"您不在富易上查看财经资讯的原因是？（单选）","createTime":"2017-03-08 10:42:14","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"408","questionId":"14","optionCode":"A","optionContent":"页面布局杂乱、无重点"},{"id":"409","questionId":"14","optionCode":"B","optionContent":"资讯内容更新不及时"},{"id":"410","questionId":"14","optionCode":"C","optionContent":"资讯内容过于专业，不太会用到"},{"id":"411","questionId":"14","optionCode":"D","optionContent":"缺少有价值的资讯内容，我想要看到的内容是"},{"id":"412","questionId":"14","optionCode":"E","optionContent":"其他"}]},{"id":"15","optionNum":"9","questionType":"1","questionLevel":"0","questionContent":"您常在富易中阅读哪些资讯内容？（多选）","createTime":"2017-03-08 10:42:47","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"363","questionId":"15","optionCode":"A","optionContent":"资讯首页"},{"id":"364","questionId":"15","optionCode":"B","optionContent":"精华资讯"},{"id":"365","questionId":"15","optionCode":"C","optionContent":"宏观财报"},{"id":"366","questionId":"15","optionCode":"D","optionContent":"自选股资讯"},{"id":"367","questionId":"15","optionCode":"E","optionContent":"财经频道"},{"id":"368","questionId":"15","optionCode":"F","optionContent":"新股中心"},{"id":"369","questionId":"15","optionCode":"G","optionContent":"交易数据"},{"id":"370","questionId":"15","optionCode":"H","optionContent":"投资日历"},{"id":"371","questionId":"15","optionCode":"I","optionContent":"消息中心推送资讯"}]},{"id":"16","optionNum":"9","questionType":"2","questionLevel":"1","questionContent":"您对富易资讯板块有什么意见和建议？","createTime":"2017-03-08 10:43:38","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[]},{"id":"17","optionNum":"2","questionType":"0","questionLevel":"2","questionContent":"您的性别（单选）","createTime":"2017-03-08 10:44:21","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"372","questionId":"17","optionCode":"A","optionContent":"男"},{"id":"373","questionId":"17","optionCode":"B","optionContent":"女"}]},{"id":"18","optionNum":"7","questionType":"0","questionLevel":"2","questionContent":"您的年龄（单选）","createTime":"2017-03-08 10:45:11","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"374","questionId":"18","optionCode":"A","optionContent":"18岁以下"},{"id":"375","questionId":"18","optionCode":"B","optionContent":"18-24岁"},{"id":"376","questionId":"18","optionCode":"C","optionContent":"25-30岁"},{"id":"377","questionId":"18","optionCode":"D","optionContent":"31-35岁"},{"id":"378","questionId":"18","optionCode":"E","optionContent":"36-40岁"},{"id":"379","questionId":"18","optionCode":"F","optionContent":"41-50岁"},{"id":"380","questionId":"18","optionCode":"G","optionContent":"50岁以上"}]},{"id":"19","optionNum":"5","questionType":"0","questionLevel":"2","questionContent":"您的股龄（单选）","createTime":"2017-03-08 10:46:01","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"381","questionId":"19","optionCode":"A","optionContent":"1年以内"},{"id":"382","questionId":"19","optionCode":"B","optionContent":"1-3年"},{"id":"383","questionId":"19","optionCode":"C","optionContent":"3-5年"},{"id":"384","questionId":"19","optionCode":"D","optionContent":"5-10年"},{"id":"385","questionId":"19","optionCode":"E","optionContent":"10年以上"}]},{"id":"20","optionNum":"6","questionType":"0","questionLevel":"2","questionContent":"您的最高学历（单选）","createTime":"2017-03-08 10:46:42","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"386","questionId":"20","optionCode":"A","optionContent":"高中以下"},{"id":"387","questionId":"20","optionCode":"B","optionContent":"高中"},{"id":"388","questionId":"20","optionCode":"C","optionContent":"大专"},{"id":"389","questionId":"20","optionCode":"D","optionContent":"本科"},{"id":"390","questionId":"20","optionCode":"E","optionContent":"硕士"},{"id":"391","questionId":"20","optionCode":"F","optionContent":"博士或博士后"}]},{"id":"21","optionNum":"7","questionType":"0","questionLevel":"1","questionContent":"您的可投资资产（单选）","createTime":"2017-03-08 10:47:27","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"392","questionId":"21","optionCode":"A","optionContent":"1万元以下"},{"id":"393","questionId":"21","optionCode":"B","optionContent":"1-5万元"},{"id":"394","questionId":"21","optionCode":"C","optionContent":"5-20万元"},{"id":"395","questionId":"21","optionCode":"D","optionContent":"20-50万元"},{"id":"396","questionId":"21","optionCode":"E","optionContent":"50-200万元"},{"id":"397","questionId":"21","optionCode":"F","optionContent":"200-500万元"},{"id":"398","questionId":"21","optionCode":"G","optionContent":"500万元以上"}]},{"id":"22","optionNum":"2","questionType":"0","questionLevel":"2","questionContent":"您的投资类型（单选）","createTime":"2017-03-08 10:47:51","activityCode":"cfde92c61867457cb58e80c278a6bdba","options":[{"id":"399","questionId":"22","optionCode":"A","optionContent":"机构投资者"},{"id":"400","questionId":"22","optionCode":"B","optionContent":"个人投资者"}]}]}

$(document).ready(function(){

	if(isIE){
		$(".ques-head-return").css("display","none");
	}
	var quesNum = 0;
	var quesList = [];
	var ques = [];
	//获取问卷
	$.ajax({
		async: false, //同步
		type: 'get',
		cache: false,
		// url: 'http://i.gtja.com/promotion2/promotion/fyQuestionnaire/getQuestion',
		url: 'https://i.gtja.com/msgpush/promotion/fyQuestionnaire/getQuestion.jsonp',
		data:{
			"activityCode":"cfde92c61867457cb58e80c278a6bdba"
		},
		dataType: 'jsonp',
		jsonp:'callback',
		success: function(res){
			// console.log("资讯问卷："+JSON.stringify(res));
			ques = res.Question;
	//生成问卷
	quesNum = ques.length;
	quesList = ques;
	// var quesNum = ques.recordsTotal;
	// var quesList = ques.data;
	var $quesForm = $("#quesForm");
	for(var i=0; i<quesNum; i++){
		var id=i+1;
		var $quesItem = $("#q"+id);
		$quesItem.children(".ques-item-question").text(quesList[i].questionContent);
		var $optionDiv = $quesItem.children(".ques-item-option");
		var optionNum = quesList[i].options.length;
		if(quesList[i].questionType != '2'){
			for(var j=0; j<optionNum; j++){
				var option = quesList[i].options[j];
				var $op = $('<div><input type='+(quesList[i].questionType=='0'?'"radio"':'"checkbox"')+'name="problem'+id+'"  value="'+option.optionCode+'" id="'+option.id+'"><label for="'+option.id+'">'+option.optionContent+'</label></div>');
				$op.appendTo($optionDiv);
			}
		}else{
			if(isIE){
				$('<div><textarea class="ques-option-text" name="" id="text16" cols="60" rows="1" onKeyUp="if(this.value.length > 15){this.value=this.value.substr(0,15)}"></textarea>&nbsp;<span>限制15个字以内</span></div>').appendTo($optionDiv);
			}else{
				$('<div><textarea class="ques-option-text" name="" id="text16" cols="60" rows="1" maxlength="80"></textarea></div>').appendTo($optionDiv);
			}
		}
	}
	//特殊选项补充输入框
	var inputOp = [{id:1,index:6},{id:3,index:9},{id:4,index:4},{id:10,index:5},{id:11,index:5},{id:12,index:6},{id:14,index:4},{id:14,index:5}];
	for(var i=0; i<inputOp.length; i++){
		var $opWithInput = $("#q"+inputOp[i].id).children(".ques-item-option").children("div :nth-child("+inputOp[i].index+")");
		if(isIE){
			$('<textarea class="ques-option-text" name="" id="" cols="30" rows="1" onKeyUp="if(this.value.length > 15){this.value=this.value.substr(0,15)}"></textarea>&nbsp;<span>限制15个字以内</span>').appendTo($opWithInput);
		}else{
			$('<textarea class="ques-option-text" name="" id="" cols="30" rows="1" maxlength="80"></textarea>').appendTo($opWithInput);
		}		
	}

	//题目跳转处理
	$(".hide1").css("display", "none");
	/*var hide1 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	var show4ab = [7,8,9,13,16];
	var show4cd = [5];
	var hide4 = [6,10,11,12,13,14,15,16];
	for(var i=0; i<hide1.length; i++){
		$("#q"+hide1[i]).addClass("hide1");
	}*/
	$('input[name="problem1"]').click(function(){
		if($('input[name="problem1"]:checked').val() == 'F'){
			$(".hide1").hide("normal");
			$(".hide1 input").removeAttr("checked");
		}else{
			$(".show1").show("normal");
		}
	});
	$('input[name="problem4"]').click(function(){
		$(".hide4").css("display","none");
		$(".hide4 input").removeAttr("checked");
		var chose4 = $('input[name="problem4"]:checked').val();
		if(chose4 == 'A'){
			$(".show4a").show("normal");
			$(".show4bcd").css("display","none");
			$(".show4bcd input").removeAttr("checked");			
		}else{
			$(".show4bcd").show("normal");
			$(".show4a").css("display","none");
			$(".show4a input").removeAttr("checked");			
		}
	});
	$('input[name="problem5"]').click(function(){
		$(".hide5").css("display","none");
		$(".hide5").removeAttr("checked");
		if($('input[name="problem5"]:checked').val() == 'A'){
			$(".show4a").show("normal");
			$(".show5b").css("display","none");
			$(".show5b input").removeAttr("checked");
		}else{
			$(".show4a").css("display","none");
			$(".show5b").show("normal");
			$(".show4a input").removeAttr("checked");
		}		
	});
	$('input[name="problem9"]').click(function(){
		$(".hide9").css("display","none");
		$(".hide9").removeAttr("checked");
		if($('#q9 input[value="A"]').is(":checked")){
			$(".show9a").show("normal");
		}else{
			$(".show9a").hide("normal");
			$(".show9a input").removeAttr("checked");			
		}
		if($('#q9 input[value="B"]').is(":checked")){
			$(".show9b").show("normal");
		}else{
			$(".show9b").hide("normal");
			$(".show9b input").removeAttr("checked");			
		}
		if($('#q9 input[value="C"]').is(":checked")){
			$(".show9c").show("normal");
		}else{
			$(".show9c").hide("normal");
			$(".show9c input").removeAttr("checked");
		}
	});
	$('input[name="problem13"]').click(function(){
		if($('input[name="problem13"]:checked').val() == 'A'){
			$(".show13a").show("slow");
			$(".show13b").css("display","none");
			$(".show13b").removeAttr("checked");
		}else{
			$(".show13b").show("slow");
			$(".show13a").css("display","none");
			$(".show13a").removeAttr("checked");
		}		
	});	
		},
	error: function(err){
		console.error("获取问卷error："+JSON.stringify(err));
	}
	})

	$(".ques-click-return").click(function(){
		window.history.back();
	});

	//日期格式化
	var timeFormater = function(d){
		return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
	}

	var beginTime = new Date();
	var userIP = returnCitySN["cip"]; 
	var answer = {
		activityCode: 'cfde92c61867457cb58e80c278a6bdba',
		userCode: '',
		channel: Request['cid'],
		registerTime: '2007-03-21 09:40:00',
		answerTime: timeFormater(beginTime),
		submitTime: '',
		costTime: '',
		respondentPhone: '',
		respondentIp: userIP,
		areaIp: '',
		respondentMark: '',
		loginStatus: 0,
		questionNum: 22,
		result: []
	}
	// $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip='+userIP, function(_result){  
	//     console.log('ppppppppp:'+ JSON.stringify(remote_ip_info));
	//     answer.areaIp = remote_ip_info.province +'-'+ remote_ip_info.city;	    
	// });
	var ipLook = {
		ip: userIP
	};
	$.ajax({
		async: false,
		type: 'POST',
		contentType: "application/json;charset=utf-8",
		url: 'http://dl.app.gtja.com/yyz/data/api/ipRelated/getIp',
		data: JSON.stringify(ipLook),
		success: function(res){
			// console.log("success:"+JSON.stringify(res));
			answer.areaIp = res.data[1]+'-'+res.data[2];
		},
		error: function(err){
			// console.error("error:"+JSON.stringify(err));
		}
	});

	//输入框只允许输入中文英文数字
	function strReplace(value) {
		var rs = value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'');
		return rs;
	}

	//问卷提交
	$("#ques-submit").click(function(){
		if(answer.result.length != 0){
			$("#myModalLabel").html('您已提交问卷，请勿重复提交！');
			$('#ques-confirm').modal('show');
			$('.modal-backdrop').remove();
			setTimeout(function(){$('#ques-confirm').modal('hide')}, 2000);
			return;		
		}		
		//试卷填写完整性检查
		var check = true;
		$(".ques-item").each(function(){
			if($(this).css("display") != "none"){
				if($(this).attr("id")!='q16' && !$(this).find("input").is(":checked")){
					$('#ques-check').modal('show');
			      	$('.modal-backdrop').remove();
			      	setTimeout(function(){$('#ques-check').modal('hide')}, 3000);
			      	if($(this).find(".pealseChose")[0] == undefined){
			      		$(this).find(".ques-item-option").prepend("<div class='pealseChose' style='color:red;'>请选择一个选项</div>");
			      	}
			      	var t = $(this).offset().top;
			      	$(window).scrollTop(t);
			      	check = false;
			      	return false;
				}else{
					if($(this).find(".pealseChose")){
						$(this).find(".pealseChose").remove();
					}
				}
			}
		});
		if(!check){
			return;
		}else{
			$("#ques-submit").unbind("click")
		}

		var endTime = new Date();
		var costTime = endTime.getTime() - beginTime.getTime();
		answer.submitTime = timeFormater(endTime);
		answer.costTime = (costTime/1000).toFixed(0)+'秒';

		for(var i=1; i<=quesNum; i++){
			var res = {
				questionId: 0,
				answerResult: ''
			}
			// var rawRes = '';
			res.questionId = i;
			if(i != 16){
				var quesType = quesList[i-1].questionType;
				var s = document.getElementsByName('problem'+i);
				if(quesType == 1){
					for(var j=0; j<s.length; j++){
						var textFlag = false;
						if($(s[j]).siblings("textarea").length != 0){
							textFlag = true;
						}
						if(s[j].checked == true && textFlag == false){
							res.answerResult += '1;';
							// rawRes += s[j].value;
						}else if(s[j].checked == true && textFlag == true){
							res.answerResult += '1';
							res.answerResult += ':';
							var str = $(s[j]).siblings("textarea").val();
							str = strReplace(str);
							if(isIE){
								str = str.substr(0,15);
							}
							res.answerResult += str;
						}else{
							res.answerResult += '0;';
						}
					}	
				}else{
					for(var j=0; j<s.length; j++){
						var textFlag = false;					
						if($(s[j]).siblings("textarea").length != 0){
							textFlag = true;
						}
						if(s[j].checked == true && textFlag == false){
							res.answerResult += s[j].value;
							// rawRes += s[j].value;
						}
						if(s[j].checked == true && textFlag == true){
							res.answerResult += s[j].value;
							res.answerResult += ':';
							var str = $(s[j]).siblings("textarea").val();
							str = strReplace(str);
							if(isIE){
								str = str.substr(0,15);
							}
							res.answerResult += str;
						}
					}	
				}				
			}else{
				var str = $("#text16").val();
				str = strReplace(str);
				if(isIE){
					str = str.substr(0,15);
				}
				res.answerResult += str;
			}
			answer.result.push(res);
		}

		var loginSubmit = function(){
			$.ajax({
				async: false,
				type: 'get',
				dataType: 'jsonp',
				jsonp:'callback',
				// url: 'https://i.gtja.com/promotion2/promotion/fyQuestionnaire/sendResult.jsonp',
				url: 'https://i.gtja.com/msgpush/promotion/fyQuestionnaire/sendResult',
				data: {
					md5Str: answer.userCode,
					macStr: answer.respondentMark,
					ip5Str: answer.respondentIp,
					sendStr: JSON.stringify(answer)
				}
			}).done(function(res){
				// console.log("问卷提交："+JSON.stringify(res));
				$("#ques-submit").css("color", "#ddd");
				if(res.success == 'false'){
					var reason = res.message;
					$("#myModalLabel").html(reason);
					$('#ques-confirm').modal('show');
					$('.modal-backdrop').remove();
					setTimeout(function(){$('#ques-confirm').modal('hide')}, 3000);
				}else{
					$('#ques-confirm').modal('show');
					$('.modal-backdrop').remove();
					setTimeout(function(){$('#ques-confirm').modal('hide')}, 2000);
					if(!isIE){
						setTimeout(function(){window.history.back();}, 2500); 
					}
				}
			});				
		}
		var nologinSubmit = function(token){
			$.ajax({
				async: false,
				type: 'get',
				dataType: 'jsonp',
				jsonp:'callback',
				// url: 'https://i.gtja.com/promotion2/promotion/fyQuestionnaire/sendResult.jsonp',
				url: 'https://i.gtja.com/msgpush/promotion/fyQuestionnaire/sendResult',
				data: {
					md5Str: token,
					macStr: answer.respondentMark,
					ip5Str: answer.respondentIp,
					sendStr: JSON.stringify(answer)
				}
			}).done(function(res){
				$(".ques-submit").css("color", "#ddd");
				if(res.success == 'false'){
					var reason = res.message;
					$("#myModalLabel").html(reason);
					$('#ques-confirm').modal('show');
					$('.modal-backdrop').remove();
					setTimeout(function(){$('#ques-confirm').modal('hide')}, 3000);
					setTimeout(function(){window.history.back();}, 2500); 
				}else{
					$('#ques-confirm').modal('show');
					$('.modal-backdrop').remove();
					setTimeout(function(){$('#ques-confirm').modal('hide')}, 2000);
					if(!isIE){
						setTimeout(function(){window.history.back();}, 2500); 
					}							
				}

			});			
		}

		//url中获取uid，获取不到为未登录
		var uid = Request['usercode'];
		// uid = 2808297;
		// console.log("uiduiduid:"+uid);
		if(uid != undefined && uid != '' && uid != null){
			answer.loginStatus = '1';
			answer.userCode = uid;
			// var data1={
			// 	md5Str: answer.userCode,
			// 	macStr: answer.respondentMark,
			// 	ip5Str: answer.respondentIp,
			// 	sendStr: JSON.stringify(answer)
			// };
			// console.log("提交信息："+JSON.stringify(data1));
	        loginSubmit();
		}else{
			if(!isIE){
				var request = {
					Method: 'SYS_FUNCData',
					FuncName: '',
					Param: "6"
				}
				window.TDXQuery({
					request: JSON.stringify(request),
					onSuccess: function(response){
						var info = eval('(' + response + ')');
						info = info[0];
						if(info.USER_CODE != ''){
							answer.loginStatus = '1';
							answer.userCode = info.USER_CODE;
							loginSubmit();
						}else{
							if(plugin().valid){
								answer.respondentMark = plugin().CAM();
								answer.respondentMark = answer.respondentMark.toUpperCase();
								answer.respondentIp = plugin().LADR();
							}
							answer.userCode = '0';
							answer.loginStatus = '0';
							var token = info.USER_TOKEN;
							nologinSubmit(token);					
						}
					},
					onFailure: function(errCode, errInfo){}
				});				
			}
		}
	});
});