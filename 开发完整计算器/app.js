var EventHandlerUtil ={
    addHandler:function(element,type,handler){
    	if (element.addEventListener) {
    		element.addEventListener(type,handler,false);
    	}else if(element.attachEvent){
    		element.attachEvent('on'+type,handler);
    	}else{
    		element['on'+type] = handler;
    	}
    },
    removeHandler:function(element,type,handler){
    	if (element.removeEventListener) {
    		element.removeEventListener(type,handler,false);
    	}else if(element.detachEvent){
    		element.detachEvent('on'+type,handler);
    	}else{
    		element['on'+type] = null;
    	}
    }
};


var n1 = null;

var n2 = null;

var op = null;

var tempNumber = []

var haveDot = false;

var isPositiveNum = true;


var elementNums = document.getElementById('num');

EventHandlerUtil.addHandler(elementNums,'click',function(e){
	var target = e.target?e.target:window.event.srcElement;
	if(target.tagName === 'LI'){
        var targetValue = target.innerHTML;
        if (targetValue === '.' && !haveDot) {
             tempNumber.push('.');
             haveDot = true;
        }else if(targetValue === '.' && haveDot){
             return false;
        }else if(targetValue === '+/-' && isPositiveNum){
             tempNumber.unshift('-');
             isPositiveNum = false;
        }else if(targetValue === '+/-' && !isPositiveNum){
             tempNumber.shift();
             isPositiveNum = true;
        }else{
             tempNumber.push(targetValue);
        }

        setN1(tempNumber);
	}
});

function setN1(arg){
    var temp = arg.join('');
    if(!isNaN(parseFloat(temp))){
    	n1 = parseFloat(temp);
    	show(tempNumber);
    }else{
    	n1 = null;
    	show(0);
    }
}

function show(arg){
	var elementScreen = document.getElementById('result');

	if(Array.isArray(arg)){
        elementScreen.innerHTML = parseFloat(arg.join(''));
	}else if(!isNaN(arg)){
		elementScreen.innerHTML = parseFloat(arg.toFixed(6));
	}else{
		elementScreen.innerHTML = arg;
	}
}

var elementControl = document.getElementById('control');

EventHandlerUtil.addHandler(elementControl,'click',function(e){
	var target = e.target?e.target : window.event.srcElement;
	if(target.tagName === 'LI'){
		var targetValue = target.innerHTML;

		if(targetValue === 'c'){
			tempNumber.pop();
			setN1(tempNumber);
		}else if(targetValue === '√'){
            if(n1 !== null){
            	n2 = Math.sqrt(n1);
            	show(n2);
                reset();
            }
		}else if(targetValue.match(/[\+\-x÷%]/)){
            calculate();
            op = targetValue;
		}else{
            calculate();
		}
	}

});

function reset(){
	n1 = null;
	tempNumber = [];
}

var calculate = function(){
	if (n2==null) {
		n2 = n1;
		reset();
	}else{
		switch(op){
			case '+':
                n2 += n1;
                reset();
                show(n2);
			    break;
			case '-':
                n2 -= n1;
                reset();
                show(n2);
			    break;
			case 'x':
                if(n1 !== null){
                	n2 *= n1;
                	reset();
                	show(n2);
                }
			    break;
			case '÷':
                if(n1 === 0){
                	show('除数不能为0');
                }else if(n1 !== null){
                	n2 /= n1;
                	reset();
                	show(n2);
                }
			    break;
			case '%':
                if(n1 === 0){
                	show('除数不能为0');
                }else if(n1 !== null){
                	n2 %= n1;
                	reset();
                	show(n2);
                }
			    break;
			default:
			    console.log('不应该会看到这个，看到了说明有bug');
		}
	}
};



var elementPro = document.getElementById('pro');
EventHandlerUtil.addHandler(elementPro,'click',function(e){
   var target = e.target? e.target : window.event.srcElement;
   if(target.tagName === 'LI'){
   	var targetValue = target.innerHTML;

   	switch(targetValue){
   		case 'AC':
            n1 = null;
            n2 = null;
            tempNumber=[];
            show(0);
   		    break;
   		case 'sin':
            if(n1 !== null){
            	n2 = parseFloat(Math.sin(n1 * 2 * Math.PI /360).toFixed(6));
            	reset();
            	show(n2);
            }
   		    break;
   		case 'cos':
            if(n1 !== null){
            	n2 = parseFloat(Math.cos(n1 * 2 * Math.PI /360).toFixed(6));
            	reset();
            	show(n2);
            }
   		    break;
   		case 'tan':
            if(n1 !== null){
            	n2 = parseFloat(Math.tan(n1 * 2 * Math.PI /360).toFixed(6));
            	reset();
            	show(n2);
            }
   		    break;
   		default:
   		    console.log('能看见这个也是不对的');

   	}
   }
});
