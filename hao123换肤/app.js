var skinList = document.getElementById('skincontrol').getElementsByTagName('li');
var body = document.getElementsByTagName('body')[0];
for(var i=0;i < skinList.length;i++){
	(function(i) {
		skinList[i].onclick = function() {

		    removeClass(body);
		    localStorage.setItem('hao123skin', i);
		    docCookies.setItem('hao123skin', i);
            switch (i){
            	case 0:
            	    addClass(body,'pink');
            	    break;
            	case 1:
            	    addClass(body,'purple');
            	    break;
            	case 2:
            	    addClass(body,'blue');
            	    break;
            	default:
            	    addClass(body,'green');
            	    
            }
		};
	})(i);
	
}

window.onload = function(){
	if (localStorage.getItem('hao123skin') || docCookies.getItem('hao123skin')) {
          var skin = parseInt(localStorage.getItem('hao123skin')) || docCookies.getItem('hao123skin');
          switch (skin){
            	case 0:
            	    lvlib.addClass(body,'pink');
            	    break;
            	case 1:
            	    addClass(body,'purple');
            	    break;
            	case 2:
            	    addClass(body,'blue');
            	    break;
            	default:
            	    addClass(body,'green');
            	    
            }
	}else{
		localStorage.setItem('hao123skin','3');
		docCookies.setItem('hao123skin','3');
		addClass(body,'green');
	}
}

var lvlib={
    addClass:function(){
    	if(!hasClass(element,classname)){
        element.className += ' ' + classname;
        }
    }
}


function addClass(element,classname){

    if(!hasClass(element,classname)){
        element.className += ' ' + classname;
    }
}

function removeClass(element,classname){

    var arg = arguments;
	if (arg.length === 1) {
		element.className = "";
	}else if(hasClass(element,classname)){
    	var reg = new RegExp('(^|\\s)'+classname+'($|\\s)');
        element.className = element.className.replace(reg,' ');
    }
}


function hasClass(element,classname){
	var reg = new RegExp('(^|\\s)'+classname+'($|\\s)');
	return element.className.match(reg);
}