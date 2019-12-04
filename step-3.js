var intro = document.getElementById('intro');
var printResult = document.getElementById('printResult');
var scoreBoard = document.getElementById('scoreBoard');
var newLine = document.createElement('p');
var game = {};
var teamAdata = document.getElementById('teamAdata');
var teamBdata = document.getElementById('teamBdata');
var inputbars = document.createElement('input');
var teamA = document.getElementById('teamA');
var teamB = document.getElementById('teamB');
var playersA = [];
var playersB = [];
var save = document.getElementById("saveData");
var teamName = [];
var bottom = document.getElementById('bottom');
var Alists = document.getElementById('Alist');
var saveData = document.getElementById('saveData');
var aTeamData = document.getElementById('aTeamData');
var bTeamData = document.getElementById('bTeamData');
var myarrA = [];
var myarrB = [];
var Alists = document.getElementById('Alists');
var Blists = document.getElementById('Blists');
var aName = document.getElementById('aName');
var bName = document.getElementById('bName');
game.result = ['S', 'B', 'O', 'anta'];

game.intro = function() {
    intro.innerHTML = '신나는 야구 게임!' + "<br>" + '첫 번째 타자가 타석에 입장했습니다.'
};

var teamAscore = {
    s: 0,
    ts: 0, /// total number of strikes
    b: 0,
    o: 0,
    anta: 0,
    tugu: 0,
    i: 0,
    roundCount: 1,
}

var teamBscore = {
    s: 0,
    ts: 0, /// total number of strikes
    b: 0,
    o: 0,
    anta: 0,
    tugu: 0,
    i: 0,
    roundCount: 1,
};

var idv = {
    s: 0,
    b: 0,
    o: 0,
    anta: 0,
    i: 0,
};

game.init = function() {
    teamAscore.o = 0;
    teamBscore.o = 0;
};

var inputData = function(h) {
    teamA.innerHTML = "A 팀 선수들을 (이름, 타율) 입력해주세요" + "<br>"
    + "타율이란 각 타자가 안타를 칠 수 있는 확률로 타율 h는 0.1 < h < 0.5이고 소수 세째 자리까지 입력한다. (ex: 0.347, 0.120)" + "<br>"
    var createTeamName = document.createElement('input');
    createTeamName.placeholder = "A팀 이름을 입력해주세요"
    teamA.appendChild(createTeamName);
    teamName.push(createTeamName);
    
    for(i = 1; i < 10; i++) {
    var Aplayers = document.createElement('input');
    Aplayers.id = i + 'A'
    Aplayers.placeholder = i + "번 타자"
    playersA.push(Aplayers);
    teamAdata.appendChild(Aplayers);
    }

    teamB.innerHTML = "B 팀 선수들을 (이름, 타율) 입력해주세요" + "<br>"
    createTeamName = document.createElement('input');
    createTeamName.placeholder = "B팀 이름을 입력해주세요"
    teamB.appendChild(createTeamName);
    teamName.push(createTeamName);

    for(i = 1; i < 10; i++) {
    var Bplayers = document.createElement('input');
    Bplayers.id = i + 'B'
    Bplayers.placeholder = i + "번 타자"
    playersB.push(Bplayers);
    teamBdata.appendChild(Bplayers);
    }
    save.innerHTML = "저장"
}


game.playA = function(Player, h) {
    newLine = document.createElement('p');
    newLine.innerHTML = Player + " 입장"
    printResult.appendChild(newLine);
        
    while(true) {
        if( 0.9 <= Math.random() ) {
            idv.o++
            teamAscore.o++
            teamAscore.tugu++
            newLine = document.createElement('p');
            newLine.innerHTML = "아웃!" + "<br>" + teamAscore.s + "S" +  " " + teamAscore.b + "B" + " " + teamAscore.o + "O";
            printResult.appendChild(newLine);
            break;
        } else if (Math.random() <= h ) {
            teamAscore.tugu++
            idv.anta++
            teamAscore.anta++
            teamAscore.s = 0;
            teamAscore.b = 0;
            newLine = document.createElement('p');
            newLine.innerHTML = "안타!" + "<br>" + teamAscore.s + "S" +  " " + teamAscore.b + "B" + " " + teamAscore.o + "O";
            printResult.appendChild(newLine);
            break;
        }  else if (h <= Math.random() && Math.random() <= (0.9 + h) / 2) {
            teamAscore.tugu++
            teamAscore.s++
            idv.s++
            newLine = document.createElement('p');
            newLine.innerHTML = "스트라이크!" + "<br>" + teamAscore.s + "S" +  " " + teamAscore.b + "B" + " " + teamAscore.o + "O";
            printResult.appendChild(newLine);
            } if (teamAscore.s === 3) {
                teamAscore.ts++;
                teamAscore.s = 0;
                teamAscore.b = 0;
                teamAscore.o++                
                idv.o++
            newLine = document.createElement('p');
            newLine.innerHTML = "스트라이크 3회 누적 아웃!" + "<br>"  + teamAscore.s +"S" +  " " + teamAscore.b + "B" + " " + teamAscore.o + "O";
            printResult.appendChild(newLine);
            } else if((0.9 + h) / 2  <= Math.random() && Math.random() <= 0.9) {
                teamAscore.tugu++
                teamAscore.b++
                idv.b++
            newLine = document.createElement('p');
            newLine.innerHTML = "볼!" + "<br>" + teamAscore.s + "S" +  " " + teamAscore.b + "B" + " " + teamAscore.o + "O";
            printResult.appendChild(newLine);
            } if(teamAscore.b === 4) {
                teamAscore.anta++
                teamAscore.s = 0;
                teamAscore.b = 0;
                idv.anta++
            
                newLine = document.createElement('p');
                newLine.innerHTML = "볼4회누적, 1 안타"+ "<br>" + teamAscore.s + "S" +  " " + teamAscore.b + "B" + " " + teamAscore.o + "O";
            printResult.appendChild(newLine);
            }  if( teamAscore.o === 3 ) {
                newLine = document.createElement('p');
                newLine.innerHTML = "턴 종료"; 
                printResult.appendChild(newLine);
                break;
            }
        }
    }

game.playB = function(Player, h) {
        newLine = document.createElement('p');
        newLine.innerHTML = Player + " 입장"
        printResult.appendChild(newLine);
        while(true) {
            if( 0.9 <= Math.random() ) {
                idv.o++
                teamBscore.o++
                teamBscore.tugu++
                newLine = document.createElement('p');
                newLine.innerHTML = "아웃!" + "<br>" + teamBscore.s + "S" +  " " + teamBscore.b + "B" + " " + teamBscore.o + "O";
                printResult.appendChild(newLine);    
                break;
            } else if (Math.random() <= h ) {
                idv.anta++
                teamBscore.tugu++
                teamBscore.anta++
                teamBscore.s = 0;
                teamBscore.b = 0;
                newLine = document.createElement('p');
                newLine.innerHTML = "안타!" + "<br>" + teamBscore.s + "S" +  " " + teamBscore.b + "B" + " " + teamBscore.o + "O";
                printResult.appendChild(newLine);           
                break;
            }  else if (h <= Math.random() && Math.random() <= (0.9 + h) / 2) {
                teamBscore.ts++;
                idv.s++
                teamBscore.tugu++
                teamBscore.s++
                newLine = document.createElement('p');
                newLine.innerHTML = "스트라이크!" + "<br>" + teamBscore.s + "S" +  " " + teamBscore.b + "B" + " " + teamBscore.o + "O";
                printResult.appendChild(newLine);           
                } if (teamBscore.s === 3) {
                    idv.o++
                    teamBscore.s = 0;
                    teamBscore.b = 0;
                    teamBscore.o++
                    newLine = document.createElement('p');
                    newLine.innerHTML = "스트라이크 3회 누적 아웃!" + "<br>" + teamBscore.s +"S" +  " " + teamBscore.b + "B" + " " + teamBscore.o + "O";
                    printResult.appendChild(newLine);
                    break;
                } else if((0.9 + h) / 2  <= Math.random() && Math.random() <= 0.9) {
                    idv.b++
                    teamBscore.tugu++
                    teamBscore.b++
                    newLine = document.createElement('p');
                    newLine.innerHTML = "볼!" + "<br>" + teamBscore.s + "S" +  " " + teamBscore.b + "B" + " " + teamBscore.o + "O";
                    printResult.appendChild(newLine);
                } if(teamBscore.b === 4) {
                    idv.anta++
                    teamBscore.anta++
                    teamBscore.s = 0;
                    teamBscore.b = 0;
                    newLine = document.createElement('p');
                    newLine.innerHTML = "볼4회누적, 1 안타" + "<br>" + "<br>" + teamBscore.s + "S" +  " " + teamBscore.b + "B" + " " + teamBscore.o + "O";
                    printResult.appendChild(newLine);
                    break;
                }  if( teamBscore.o === 3 ) {
                    newLine = document.createElement('p');
                    newLine.innerHTML = "턴 종료"; 
                    printResult.appendChild(newLine);
                    break;
                }
            }
        }

saveData.addEventListener('click', function() {
    console.log('working');
    for(i = 0; i < 9; i++) {
        myarrA[i] = playersA[i].value.split(",");
    }
    for(i = 0; i < 9; i++) {
        myarrB[i] = playersB[i].value.split(",");
    }
    save.innerHTML = "입력한 데이터가 저장되었습니다"
});

var printData = function() {    
    aName.innerHTML = "<" + teamName[0].value + ">";
    for(i = 0; i < 9; i++) {        
    var addNames = document.createElement('p');
    
    addNames.innerHTML =  i+1 + "번째 선수 "  + myarrA[i];
    Alists.appendChild(addNames);
    } 
    
    bName.innerHTML ="<" + teamName[1].value + ">";
    for(i = 0; i < 9; i++) {        
    var addNames = document.createElement('p');
    
    addNames.innerHTML =  i+1 + "번째 선수 "  + myarrB[i];
    Blists.appendChild(addNames);
    }
};

var playA = function() {
    newLine = document.createElement('p');
    newLine.innerHTML = teamAscore.roundCount + "회 초 " + teamName[0].value + " 공격";
	printResult.appendChild(newLine);
    newLine = document.createElement('p');
    newLine.innerHTML = "--------전광판에는 이번 회 (" + teamAscore.roundCount + " 회) " + "에 플레이한 선수들만 차례대로 출력됩니다--------" + "<br>" +
                        "---------------------------<" + teamName[0].value + ">---------------------------";
    bottom.appendChild(newLine);

    while( teamAscore.o !==3) {     
	newLine = document.createElement('p'); 
    newLine.innerHTML = (teamAscore.i +1) + "번";
    printResult.appendChild(newLine);
    game.playA(myarrA[teamAscore.i][0], Number(myarrA[teamAscore.i][1])) 
    newLine = document.createElement('p');
    newLine.innerHTML = (teamAscore.i+1) + "번  " + myarrA[teamAscore.i][0] + "  S" + idv.s + " B" + idv.b + " O" + idv.o;
    bottom.appendChild(newLine);
    teamAscore.i++
    idv.s = 0;
    idv.o = 0;
    idv.b = 0;
		if(teamAscore.i === 8 ) {
			teamAscore.i = 0;
		}
    } teamAscore.roundCount++;
      
}

var playB = function() {
    newLine = document.createElement('p');
    newLine.innerHTML = teamBscore.roundCount + "회 말 " + teamName[1].value + " 공격";
    printResult.appendChild(newLine);
    newLine = document.createElement('p');
    newLine.innerHTML = 
    "---------------------------<" + teamName[1].value + ">---------------------------";
    bottom.appendChild(newLine);
    while( teamBscore.o !==3) { 
    newLine = document.createElement('p');
    newLine.innerHTML = (teamBscore.i + 1) + "번";
    printResult.appendChild(newLine);
    game.playB(myarrB[teamBscore.i][0], Number(myarrB[teamBscore.i][1])) 
    newLine = document.createElement('p');
    newLine.innerHTML = (teamBscore.i+1) + "번  " + myarrB[teamBscore.i][0] + "  S" + idv.s + " B" + idv.b + " O" + idv.o;
    bottom.appendChild(newLine);
    
    teamBscore.i++
    idv.s = 0;
    idv.o = 0;
    idv.b = 0;
		if(teamBscore.i === 8 ) {
		teamBscore.i = 0;
		}
	} teamBscore.roundCount++;
}

var playRound = function() {
	deleteAll('bottom');
	game.init();
    playA();
    showScoreA();
    playB();
    showScoreB();
};



var jumpRound = function() {
    teamAscore.roundCount = 1;
    teamBscore.roundCount = 1;
    while(printResult.hasChildNodes()) {
        printResult.removeChild(printResult.firstChild) 
        };
    var whichRnd = Number(document.getElementById('whichRnd').value);
    for ( var i = 0; i < whichRnd; i++) {
        deleteAll('bottom');
        game.init();
        playA();
        showScoreA();
        playB();
        showScoreB();
    }
};


var showScoreA = function() {
    newLine = document.createElement('p');
    newLine.innerHTML = "| 투구 : " + teamAscore.tugu + "  | "+ "<br>" +
                        "| 안타 : " + teamAscore.anta + "    | " + "<br>" +
                        "| 삼진 : " + Math.floor((teamAscore.ts / 3)) + "     |";
    bottom.appendChild(newLine);
}

var showScoreB = function() {
    newLine = document.createElement('p');
    newLine.innerHTML =   "| 투구 : " + teamAscore.tugu + "  | "+ "<br>" +
                          "| 안타 : " + teamAscore.anta + "    | " + "<br>" +
                          "| 삼진 : " + Math.floor((teamBscore.ts / 3)) + "     |";
    bottom.appendChild(newLine);
}


var deleteAll = function(typeID) {
    var cell = document.getElementById(typeID);
    while ( cell.hasChildNodes() ) {
         cell.removeChild( cell.firstChild ); 
    }
}


