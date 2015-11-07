$(function(){
//$("#filter").click(function(){
//$('#session_key-login').val('erengkiraezeeeeeeeeeeeeeee@gmail.com');
//window.open("https://tr.linkedin.com/");
//$('#session_key-login').val('erengkiraz@gmairrrrrrrrrrrrrrl.com');
//$('#session_key-login').val('erengkiraez@gmail.com');
//});
	$("ul li").click(function()
	{
		var id = $(this).attr("id");
		chrome.tabs.getSelected(null, function(tab)
			{
				link = tab.url;
				title = tab.title;
				
				if (id == "vakifEbis") window.open("http://ebisdestek.vakifbank.com.tr/vakifbank/index.do");
				else if (id == "akademiVakif") window.open("https://akademi.vakifbank.com.tr/logon.aspx?ReturnUrl=%2fDefault.aspx");
				else if (id == "linkedin") window.open("https://tr.linkedin.com/");
				//http://10.113.68.90/sms/smsaratest.asp  ||  http://10.113.68.50/smssorgu/smsgiris.asp
                else if (id == "smsgiris") window.open("http://10.113.68.90/sms/smsaratest.asp ");   
                else if (id == "vakifBank") window.open("http://www.vakifbank.com.tr/"); 
			    else if (id == "testVakifBank") window.open("https://internetsubetest.vakifbank.com.tr/");
			    else if(id == "planet") window.open("http://planet.vakifbank.intra/itg/web/knta/crt/RequestDetail.jsp?REQUEST_ID=120455");
   else if(id == "mobiltest") window.open("http://localhost/MobilBankacilik/Login/LoginUser");				
}
		);
	});
	
	  $('#1070').change(function() {
       $('#session_key-login').val('erengkiraz@gmail.com');
    });
	
}




);