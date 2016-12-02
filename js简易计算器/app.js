var btn=document.getElementById('cal');

btn.onclick=function(){
	var num1=document.getElementById('num1').value;
	var num2=document.getElementById('num2').value;
	var method=document.getElementById('method').value;

	calculate(num1,num2,method);
}

function checkNum(num1,num2,method){

    num1=num1.trim();
    num2=num2.trim();

    if(!num1 || !num2){
    	alert('请做输入');
    	return false;
    }

    if(isNaN(num1) || isNaN(num2)) {
    	alert('请输入数字');
    	return false;
    }

    if(method=='divide' && parseFloat(num2) === 0){
    	alert('除数可不能为0啊');
    	return false;
    }

    return true;
}

function calculate(num1,num2,method){
	if(!checkNum(num1,num2,method)){
		return;
	}

	num1=parseFloat(num1);
	num2=parseFloat(num2);
	var result;

	switch (method){
		case 'add':
		    result = num1 + num2;
		    break;
		case 'minus':
		    result = num1 - num2;
		    break;
	    case 'multiple':
		    result = num1 * num2;
		    break;
		default:
		    result = num1 / num2;
		    break;
	}

	document.getElementById('result').innerHTML=result;
}