window.onload = function() 
{
    // ---------  HOME FUNCTIONS  -----------

    var timer = document.querySelector("#countdown");
    if (timer) {
    var today = new Date();
    var target_date = new Date(Date.parse(new Date(today.getFullYear(), 01, 03, 09))); // set the countdown date
    var days, hours, minutes, seconds; // variables for time units

    var countdown = document.getElementById("tiles"); // get tag element

    getCountdown();

    setInterval(
        function() {
        getCountdown();
        },
        1000
    );

    function getCountdown() {
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        days = pad(parseInt(seconds_left / 86400));
        seconds_left = seconds_left % 86400;

        hours = pad(parseInt(seconds_left / 3600));
        seconds_left = seconds_left % 3600;

        minutes = pad(parseInt(seconds_left / 60));
        seconds = pad(parseInt(seconds_left % 60));

        // format countdown string + set tag value
        countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
    }

    function pad(n) {
        return (n < 10 ? "0" : "") + n;
    }
    }

    var ldbrd = document.querySelector("#ldbrd");
    if (ldbrd) {
    ldbrd.addEventListener(
        "click",
        function() {
        window.location.replace(
            "/leaderboard"
        );
        }
    );
    }

    // ---------  LEADERBOARD FUNCTIONS  -----------

    var ajax = function(category_id) {
        
        
        var teamDivs = document.querySelectorAll('.teams');
        var shouldAjax = false;
        var hasData = false
        teamDivs.forEach (element => {
            if (element.id){
                if (element.id == "teams" + category_id) {
                    element.classList.remove("noshow");
                    hasData = true;
            
                }
                else  {
                  element.classList.add("noshow");
                } 
            } 
        })
        if (!hasData) {
            shouldAjax = true;
        }
        if (shouldAjax) {
            var url = "api/leaderboard/" + category_id;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                    var leaderboard = document.querySelector(".leaderboard")
                    leaderboard.classList.remove("noshow");
                    var teamRow = document.querySelector("#team-row");
            
                    var teamList = document.querySelector(".teams");
                    var newList = teamList.cloneNode(true);
                    leaderboard.appendChild(newList)
                    newList.classList.remove('noshow')
                    newList.setAttribute('id', 'teams'+category_id)
                    var data = JSON.parse(xmlhttp.responseText);

                    data.forEach(
                        element => {
                        var row = teamRow.cloneNode(true);
                        var mainInfo = row.children[0];
                        var eventScores = row.children[1];
                        var position = mainInfo.children[0];
                        var teamCell = mainInfo.children[1];
                        var plus = mainInfo.children[2];
                        
                        position.innerHTML = element.position;
                        teamCell.children[0].innerHTML = element.team.name;
                        teamCell.children[2].innerHTML = element.team.ath1 + " & " + element.team.ath2;
                        element.team.totalScore ? teamCell.children[1].innerHTML = "(" + element.team.totalScore + " pts)" : teamCell.children[1].innerHTML = "(0 pts)";
                       
                        var arrayScores = eventScores.children;
                        for (var i=0; i<arrayScores.length; i++){
                            element.eventScores[i] ? (arrayScores[i].innerHTML = "Ev #" + (i + 1) + ": " + element.eventScores[i].score + " (" + element.eventScores[i].points + 'º)') : (arrayScores[i].innerHTML = "Ev #" + (i + 1) + ": " + "--"); 
                        }
                        
                        mainInfo.setAttribute('id', element.team.id)
                        eventScores.setAttribute('id', 'ev'+element.team.id)
                        plus.addEventListener(
                          "click",function() {
                            evScoreDiv = document.querySelector('#ev' + plus.parentNode.id);
                            if (evScoreDiv.classList.contains('noshow')){
                                evScoreDiv.classList.remove("noshow");
                            } 
                            else {
                                evScoreDiv.classList.add("noshow");

                            }
                          }
                        );
                        row.classList.remove( "noshow");
                        row.appendChild(mainInfo);
                        row.appendChild(eventScores);
                        newList.appendChild(row);
                        }
                    );
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }
    };
    var fetchData = function(category_id) {
        ajax(category_id);
    };
    
    var unclick = function() {
        var btns = document.querySelectorAll('.sexo_inner');
        btns.forEach(btn => {
            if (btn.classList.contains('clicked')){
                btn.classList.remove('clicked')
            }
        })
    }

    var fillLeaderboard = function() {
        var category_id
        var cat1 = document.querySelector("#cat1");
        var cat2 = document.querySelector("#cat2");
        var cat3 = document.querySelector("#cat3");
        var cat4 = document.querySelector("#cat4");
        
        cat1.addEventListener("click", function(){
            category_id = 1;
            unclick();
            cat1.classList.add('clicked');
            fetchData(category_id);
        });
        cat2.addEventListener("click", function(){
            category_id = 2;
            unclick();
            cat2.classList.add("clicked");
            fetchData(category_id);
        });
        cat3.addEventListener("click", function(){
            category_id = 3;
            unclick();
            cat3.classList.add("clicked");
            fetchData(category_id);
        });
        cat4.addEventListener("click", function(){
            category_id = 4;
            unclick();
            cat4.classList.add("clicked");
            fetchData(category_id);
        });
    }

    // var plus = document.querySelector('.main-info');
    // if (plus){

       
    // }
  
    
    fillLeaderboard();
}