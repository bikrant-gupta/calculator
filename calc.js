function call_num(val){
	var val2=document.querySelector(".display").textContent;
	if(parseFloat(document.querySelector(".display").textContent)===0)
	{
		document.querySelector(".display").textContent="";
	}
	if(parseFloat(document.querySelector(".display_all").textContent)===0)
	{
		document.querySelector(".display_all").textContent="";
	}

	var val3=document.querySelector(".total").textContent;
	if(val3=="eq"){
		document.querySelector(".display_all").textContent="";
		document.querySelector(".display").textContent="";
		document.querySelector(".display_total").textContent="0";
	}
	
	document.querySelector(".display").textContent+=val;
	document.querySelector(".display_all").textContent+=val;

}
function call_num1(){
	var val=document.querySelector("#click1").textContent;
	call_num(val);
}

function call_num2(){
	var val=document.querySelector("#click2").textContent;
	call_num(val);

}
function call_num3(){
	var val=document.querySelector("#click3").textContent;
	call_num(val);

}
function call_num4(){
	var val=document.querySelector("#click4").textContent;
	call_num(val);
}
function call_num5(){
	var val=document.querySelector("#click5").textContent;
	call_num(val);
}
function call_num6(){
	var val=document.querySelector("#click6").textContent;
	call_num(val);
}
function call_num7(){
	var val=document.querySelector("#click7").textContent;
	call_num(val);

}
function call_num8(){
	var val=document.querySelector("#click8").textContent;
	call_num(val);

}
function call_num9(){
	var val=document.querySelector("#click9").textContent;
	call_num(val);

}
function call_num0(){
	var val=document.querySelector("#click0").textContent;
	call_num(val);

}
function call_dot(){
	var val=document.querySelector("#clickdot").textContent;
	call_num(val);

}
function call_Delete(){
	var val3=document.querySelector(".total").textContent;
	if(val3=="eq"){
		document.querySelector(".display_all").textContent=document.querySelector(".display").textContent;
		document.querySelector(".display_total").textContent="0";
	}
	var str_display = document.querySelector(".display").textContent;
	var str_display_all = document.querySelector(".display_all").textContent;
	if(str_display.length>=1){
		var new_str_display=str_display.substr(0,str_display.length-1);
	}
	if(str_display_all.length>=1){
		var new_str_display_all=str_display_all.substr(0,str_display_all.length-1);
	}
	if(new_str_display.length==0){
		var new_str_display="0";
	}
	if(new_str_display_all.length==0){
		var new_str_display_all="0";
	}
	document.querySelector(".display").textContent=new_str_display;
	document.querySelector(".display_all").textContent=new_str_display_all;
}
function call_clear(){
	document.querySelector(".display").textContent="0";
	document.querySelector(".display_all").textContent="0";
	document.querySelector(".display_total").textContent="0";
	document.querySelector(".total").textContent="0";
}

function call_operation(str){
	var str2=document.querySelector(".display_all").textContent;
	
	var l=str2.length;
	if(str2[l-1]!=str)
	{
		var s=document.querySelector(".total").textContent;
		if(str=="x" || str=="/"){
			var l=document.querySelector(".display_all").textContent;
			var len=l.length;
			if(l[len-1]=="+" || l[len-1]=="-")
			{
				document.querySelector(".total").textContent=str;
				l=l.substr(0,len-1);
				document.querySelector(".display_all").textContent=l;
			}
		}
		
		if(s=="+" || s=="-" || s=="x" || s=="/")
		call_total(s);
		else{
	    document.querySelector(".display_total").textContent=document.querySelector(".display").textContent;
		}

		document.querySelector(".display_all").textContent+=str;
	}
	document.querySelector(".display").textContent="0";
}
function call_total(str){
	if(str==="+")
	{
		document.querySelector(".display_total").textContent=parseFloat(document.querySelector(".display_total").textContent)+parseFloat(document.querySelector(".display").textContent);
	}
	else if(str==="-")
	{
		document.querySelector(".display_total").textContent=parseFloat(document.querySelector(".display_total").textContent)-parseFloat(document.querySelector(".display").textContent);
	}
	else if(str==="x")
	{
		document.querySelector(".display_total").textContent=parseFloat(document.querySelector(".display_total").textContent)*parseFloat(document.querySelector(".display").textContent);
	}
	else if(str==="/")
	{
		document.querySelector(".display_total").textContent=parseFloat(document.querySelector(".display_total").textContent)/parseFloat(document.querySelector(".display").textContent);
	}
	
	

}
function call_add(){
	var l=document.querySelector(".display_all").textContent;
	var len=l.length;
	if(l[len-1]!="x" && l[len-1]!="/"){
		call_operation("+");
		document.querySelector(".total").textContent="+";
	}
	
	
}
function call_sub(){
	if(document.querySelector(".display").textContent=="0"){
		document.querySelector(".display").textContent="-";
		document.querySelector(".display_all").textContent=document.querySelector(".display_all").textContent+"-";
	}
	else{
		call_operation("-");
		document.querySelector(".total").textContent="-";
	}
	
	
}
function call_mul(){
	var l=document.querySelector(".display_all").textContent;
	var len=l.length;
	if(l[len-1]=="/" ){
		document.querySelector(".total").textContent="x";
		l=l.substr(0,len-1);
		document.querySelector(".display_all").textContent=l+"x";

	}
	else{
		call_operation("x");
		document.querySelector(".total").textContent="x";
	}
	
}
function call_div(){
	var l=document.querySelector(".display_all").textContent;
	var len=l.length;
	if(l[len-1]=="x" ){
		document.querySelector(".total").textContent="/";
		l=l.substr(0,len-1);
		document.querySelector(".display_all").textContent=l+"/";

	}
	else{
		call_operation("/");
		document.querySelector(".total").textContent="/";
	}
	
}
function call_equal(){
		var s=document.querySelector(".total").textContent;
		if(s=="+" || s=="-" || s=="x" || s=="/"){
			call_total(s);
			document.querySelector(".total").textContent="eq";
		}
		else{
	    document.querySelector(".display_total").textContent=document.querySelector(".display").textContent;
		}
		document.querySelector(".display").textContent=document.querySelector(".display_total").textContent;
}

function call_sign(){
	var val3=document.querySelector(".total").textContent;
	if(val3=="eq"){
		document.querySelector(".display_all").textContent=document.querySelector(".display").textContent;
		document.querySelector(".display_total").textContent="0";
	}
	var str=document.querySelector(".display").textContent;
	var l=str.length;
	var str2=document.querySelector(".display_all").textContent;
	var l2=str2.length;
	if(str[0]=='-'){
		str=str.substr(1,l);
	}
	else{
		str="-"+str;
	}
	str2=str2.substr(0,l2-l);
	str2+=str;
	document.querySelector(".display_all").textContent=str2;
	document.querySelector(".display").textContent=str;
}
