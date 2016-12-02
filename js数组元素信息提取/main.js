function Maxchar(str){
	this.str = str || '';
	this.maxCharMeta = {};
}

Maxchar.prototype.parser = function(){
	var str = this.str;

	var objChar = {},
	    maxCounter = 0;
	for(var i = 0; i < str.length; i++){
		if(objChar[str[i]]){
			objChar[str[i]].num += 1;
			objChar[str[i]].indexs.push(i);
		}else{
			var metaChar = {
				char: str[i],
				num: 1,
				indexs: [i]
			}
			objChar[str[i]] = metaChar;
		}
		if(maxCounter < objChar[str[i]].num){
			this.maxCharMeta = objChar[str[i]];
			maxCounter = objChar[str[i]].num;
		}
	}
	return this;
}

Maxchar.prototype.maxCharInfo = function(){
	return this.maxCharMeta;
}

var maxCharOut = {
	inputStr: null,
	parsedObj: null,
	init: function(){
		this.getStrInfo();
	},
	getStrInfo: function(){
		var inputStr = document.getElementById('inputStr');
		var calculateBtn = document.getElementById('calculateBtn');

		calculateBtn.onclick = function () {
			maxCharOut.inputStr = inputStr.value;
			maxCharOut.parser();
			maxCharOut.charView();
		}
	},
	parser: function(){
		this.parsedObj = new Maxchar(this.inputStr).parser().maxCharInfo();
	},
	charView: function(){
		var maxChar = document.getElementById('maxChar');
		var maxCounter = document.getElementById('maxCounter');
		var strIndex = document.getElementById('strIndex');

		if(this.parsedObj){
			maxChar.innerHTML = this.parsedObj.char;
		    maxCounter.innerHTML = this.parsedObj.num;
		    strIndex.innerHTML = this.parsedObj.indexs.join(',');
		}
	}
};

(function(){
	maxCharOut.init();
})();

