
app.controller('quesController',['$scope', '$rootScope', 'tdxSystemInterface', function($scope, $rootScope, tdxSystemInterface){
	$rootScope.isNrng = true; //未登录情况下展示页面
	//用户IP和城市	
	// console.log("kkkkkkkkkkk："+returnCitySN["cip"]+','+returnCitySN["cname"]);

	$(".hide1").css("display", "none");
	var num0=0, num1=0, num2=0;
	$scope.clickShow = function(ques, index){
		switch(ques){
			case 1:
				if(index != 5){
					$(".show1").show("slow");
				}else{
					$(".hide1").hide("slow");
					$(".hide1 input").removeAttr("checked");
				}
				break;
			case 4:
				$(".hide4").css("display","none");
				$(".hide4").removeAttr("checked");
				if(index == 0 || index == 1){
					$(".show4ab").show("slow");
					$(".show4cd").css("display","none");
					$(".show4cd").removeAttr("checked");
				}else{
					$(".show4cd").show("slow");
					$(".show4ab").css("display","none");
					$(".show4ab").removeAttr("checked");
				}
				break;
			case 5:
				$(".hide5").css("display","none");
				$(".hide5").removeAttr("checked");
				if(index == 0){
					$(".show4ab").show("slow");
					$(".show5b").css("display","none");
					$(".show5b").removeAttr("checked");
				}else{
					$(".show4ab").css("display","none");
					$(".show5b").show("slow");
					$(".show4ab").removeAttr("checked");
				}
				break;
			case 9:
				$(".hide9").css("display","none");
				$(".hide9").removeAttr("checked");
				if(index == 0){
					num0 += 1;
					if(num0%2 == 1){
						$(".show9a").show("slow");
					}else{
						$(".show9a").hide("slow");
						$(".show9a").removeAttr("checked");
					}
				}else if(index == 1){
					num1 += 1;
					if(num1%2 == 1){
						$(".show9b").show("slow");
					}else{
						$(".show9b").hide("slow");
						$(".show9b").removeAttr("checked");
					}
				}else if(index == 2){
					num2 += 1;
					if(num2%2 == 1){
						$(".show9c").show("slow");
					}else{
						$(".show9c").hide("slow");
						$(".show9c").removeAttr("checked");
					}
				}
				break;
			case 13:
				if(index == 0){
					$(".show13a").show("slow");
					$(".show13b").css("display","none");
					$(".show13b").removeAttr("checked");
				}else{
					$(".show13b").show("slow");
					$(".show13a").css("display","none");
					$(".show13a").removeAttr("checked");
				}
				break;
		}
	}

	var timeFormater = function(d){
		return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
	}

	$scope.text1=[]; $scope.text3=[]; $scope.text4=[]; $scope.text10=[]; $scope.text11=[]; $scope.text12=[]; $scope.text14=[];
	$scope.text16 = '';
	$scope.subContent = '';
	$scope.questions = [];
	var userIP = returnCitySN["cip"];
	var beginTime = new Date();

	$.ajax({
		async: false,
		type: 'POST',
		url: 'http://weixin.gtja.com/everoms2/promotion/questionnaire/question/getQuestion.json',
		data: {
			activityCode: 'cfde92c61867457cb58e80c278a6bdba'
		}
	}).done(function(res){
		// console.log("资讯问卷："+JSON.stringify(res));
		res.data.forEach(function(item){
			item.questionType = (item.questionType=='0'?'radio':'checkbox');
		})
		$scope.questions = res.data;
	})
	 
	var answer = {
		activityCode: 'cfde92c61867457cb58e80c278a6bdba',
		userCode: '',
		channel: 'fy',
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

	$scope.submit = function(){
		//试卷填写完整性检查
		var check = true;
		$(".ques-item").each(function(){
			if($(this).css("display") != "none"){
				if(!$(this).find("input").is(":checked")){
					$("#ques-confirm h4").text("请将问卷填写完整后提交！");
					$('#ques-confirm').modal('show');
			      	$('.modal-backdrop').remove();
			      	setTimeout(function(){$('#ques-confirm').modal('hide')}, 2000);
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
		}

		var endTime = new Date();
		var costTime = endTime.getTime() - beginTime.getTime();
		answer.submitTime = timeFormater(endTime);
		answer.costTime = (costTime/1000).toFixed(0)+'秒';		

		for(var i=1; i<=$scope.questions.length; i++){
			var res = {
				questionId: 0,
				answerResult: ''
			}
			res.questionId = i;
			if(i != 16){
				var s = document.getElementsByName('problem'+i);
				for(var j=0; j<s.length; j++){
					if(s[j].checked == true){
						res.answerResult += s[j].value;
					}
				}				
			}else{
				res.answerResult += $scope.text16;
			}
			switch(i){
				case 1:
					if(res.answerResult.match('F')){
						res.answerResult += ($scope.text1[5]==undefined?'':$scope.text1[5]);
					}					
					break;
				case 3:
					if(res.answerResult.match('I')){
						res.answerResult += ($scope.text3[8]==undefined?'':$scope.text3[8]);
					}					
					break;
				case 4:
					if(res.answerResult.match('D')){
						res.answerResult += ($scope.text4[3]==undefined?'':$scope.text4[3]);
					}					
					break;
				case 10:
					if(res.answerResult.match('E')){
						res.answerResult += ($scope.text10[4]==undefined?'':$scope.text10[4]);
					}					
					break;
				case 11:
					if(res.answerResult.match('E')){
						res.answerResult += ($scope.text11[4]==undefined?'':$scope.text11[4]);
					}					
					break;
				case 12:
					if(res.answerResult.match('F')){
						res.answerResult += ($scope.text12[5]==undefined?'':$scope.text12[5]);
					}					
					break;
				case 14:
					if(res.answerResult.match('D')){
						res.answerResult += ($scope.text14[3]==undefined?'':$scope.text14[3]);
					}else if(res.answerResult.match('E')){
						res.answerResult += ($scope.text14[4]==undefined?'':$scope.text14[4]);
					}					
					break;
			}
			answer.result.push(res);
		}

		tdxSystemInterface['获取用户信息'](null, false, true).then(function(res){
			console.log("用户信息aaa："+ JSON.stringify(res));
			if(!res || !res[0]){
				answer.loginStatus = 0;
			}else{
				if(res[0].USER_CODE != ''){
					answer.loginStatus = 1;
					answer.userCode = res[0].USER_CODE;
					if(res[0].MOBILE){
						answer.respondentPhone = res[0].MOBILE;
					}
				}
			}

		    var url = "http://ip.taobao.com/service/getIpInfo.php?ip=" + userIP;
		    $.getJSON(url, function (info) {
		        // console.log("您所在的城市是：" +JSON.stringify(info));
		        answer.areaIp =  info.data.region+'-'+info.data.city;
		        // console.log("问卷答案："+JSON.stringify(answer));
		        $scope.subContent = "您所在的城市是：" +JSON.stringify(info)+"问卷答案："+JSON.stringify(answer);
		        $scope.$apply();
				$.ajax({
					async: false,
					type: 'POST',
					url: 'http://weixin.gtja.com/everoms2/promotion/questionnaire/returnResult/sendResult.json',
					data: {
						sendStr: JSON.stringify(answer)
					}
				}).done(function(res){
					console.log("问卷提交："+JSON.stringify(res));
				});					        
		    });
		})
		
		$(".ques-submit").css("color", "#ddd");
		$('#ques-confirm').modal('show');
      	$('.modal-backdrop').remove();
      	setTimeout(function(){$('#ques-confirm').modal('hide')}, 2000);
      	// setTimeout(function(){window.history.back();}, 2500);     	
	}
}])


{
	shareId: '123',
	uid: '52e55c6cb8ffdd1635806f5d70affe5f',
	data:{
		stkName: '中国建筑',
		stkCode: '601668',
		stkMarket: 'sh',
		stkTag: '成长型'，
		score: 7.8,
		scoreBeat: 89,
		technique: 5,
		info: 6.2,
		fund: 6,
		basic: 5.9,
		strategy:{
            "STOCK_CODE":"600083",
            "SUPPORT_LEVEL":"15.450000",
            "RESISTANCE_LEVEL":"18.050000",
            "SW_IND_NAME2":"综合Ⅱ",
            "5D_PRICE_CHG":"-0.092200",
            "5D_PRICE_CHG_OVER_OTHER_RATE":"0.120000",
            "IND_5D_INDEX_CHG":"0.042300",
            "HS300_5D_INDEX_CHG":"-0.013300",
            "VR26":"44.095200",
            "MA5":"17.546000",
            "MA10":"17.866000",
            "MA20":"18.259500",
            "MA30":"18.382400",
            "CLOSE_PRICE":"16.350000",
            "TRADE_DATE":"20170418",
            "BUSI_DATE":"20170419"
		}
	}
}