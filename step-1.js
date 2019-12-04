var welcome = document.getElementById('welcome');
var print = document.getElementById('print');
var pline = document.createElement('p');
var game = {};

game.intro = function() {
    welcome.innerHTML = "신나는 야구 게임!" + "<br>" + "첫 번째 타자가 타석에 입장했습니다.";    
}; 

game.score = {
    s : 0,
    b : 0,
    o : 0,
    anta : 0,
};

var rnd;

/// 한번씩 공을 던지고 결과를 반환해준다.
game.throw = function() {
    var sboa = ['스트라이크!', '볼!', '아웃!', '안타!'];    
    var result;
    rnd = Math.floor(Math.random() * sboa.length);
    if (rnd === 0) {
        this.score.s++;
        result = sboa[0]
    } else if (rnd === 1) {
        this.score.b++;
        result = sboa[1]
    } else if (rnd === 2) {
        this.score.s = 0;
        this.score.b = 0;
        this.score.o++;
        result = sboa[2]
    } else if (rnd === 3) {
        this.score.anta++;
        this.score.s = 0;
        this.score.b = 0;
        result = sboa[3]
    } pline = document.createElement('p');
      pline.innerHTML = result + "<br>" + game.score.s + "S " +  game.score.b + "B " + game.score.o + "O " + game.score.anta + "안타";
      print.appendChild(pline);      
      game.threeStrike();
      game.fourBalls();
      game.threeOut();
};

/// p 만들고 innerHTML 쓰고 appendChild 하기
game.addLines = function(parent, write) {
    pline = document.createElement('p');
    pline.innerHTML = write;
    parent.appendChild(pline);  
};

///스트라이크가 3회 누적되면 1 아웃이다.
///  스트라이크와 볼 카운트는 초기화된다.

game.threeStrike = function() {
    if (game.score.s === 3) {
        game.score.s = 0;
        game.score.b = 0;
        pline = document.createElement('p');
        pline.innerHTML = "쓰리 스트라이크!" + "<br>" + "아웃! 다음 타자가 타석에 입장했습니다."
        print.appendChild(pline); 
    }
};

///3 아웃이 될 경우 전체 안타수를 출력하고 경기가 종료된다. 
game.threeOut = function() {
    if (game.score.o ===3 ){
        pline = document.createElement('p');
        pline.innerHTML = "쓰리 아웃!" + "<br>" + "경기가 종료되었습니다." + "<br>"
                        + "총 안타수:" + game.score.anta + "<br>" + "GAME OVER";
        print.appendChild(pline); 
    }
};

///볼이 4회 누적되면 1 안타가 된다. 스트라이크와 볼 카운트는 초기화된다.
game.fourBalls = function() {
    if (game.score.b === 4) {
        game.socre.o++
        game.score.s = 0;
        game.score.b = 0;
    }
};


game.intro();
while (game.score.o !== 3 ) {
    game.throw();
}