var studentScore = {
    score: '',
    init: function() {
        this.getScore();
    },
    getScore: function() {
        var scoreValue = document.getElementById("studentScore");
        var scoreBtn = document.getElementById("checkScore");

        scoreBtn.onclick = function() {
            studentScore.score = scoreValue.value;
            if (studentScore.score == '') {
                studentScore._finalScore("您尚未输入成绩，请重新输入！");
                return 0;
            }
            studentScore._calculate();
        }
    },
    _calculate: function() {
        var score = studentScore.score;
        switch (true) {
            case score > 90 && score <= 100:
                studentScore._finalScore("1等生");
                break;
            case score > 80 && score <= 90:
                studentScore._finalScore("2等生");
                break;
            case score > 70 && score <= 80:
                studentScore._finalScore("3等生");
                break;
            case score > 60 && score <= 70:
                studentScore._finalScore("4等生");
                break;
            case score > 50 && score <= 60:
                studentScore._finalScore("5等生");
                break;
            case score > 40 && score <= 50:
                studentScore._finalScore("6等生");
                break;
            case score > 30 && score <= 40:
                studentScore._finalScore("7等生");
                break;
            case score > 20 && score <= 30:
                studentScore._finalScore("8等生");
                break;
            case score > 10 && score <= 20:
                studentScore._finalScore("9等生");
                break;
            case score > 0 && score <= 10:
                studentScore._finalScore("差生");
                break;
            default:
                studentScore._finalScore("请输入0到100的数字！");
                break;
        }
    },

    _finalScore: function(str){
    	var finalScore = document.getElementById("finalScore");
    	finalScore.innerHTML = str;
    }
};

(function(){
	studentScore.init();
})()

