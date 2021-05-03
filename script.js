let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;


function timerStart(){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    document.getElementById('pauseTimer').disabled = false;
    document.getElementById('pauseTimer').style.backgroundColor="blue";
    document.getElementById('resetTimer').disabled = false;
    document.getElementById('resetTimer').style.backgroundColor="blue";
    document.getElementById('startTimer').disabled = true;
    document.getElementById('startTimer').style.backgroundColor="red";
};


function timerPause(){
    clearInterval(int);
    
    
    if(document.getElementById('pauseTimer').style.backgroundColor==="red"){
        return;
    }
    if(document.getElementById('pauseTimer').innerText!=="continue"){
        document.getElementById('pauseTimer').innerText="continue";
    }
    else{
        document.getElementById('pauseTimer').innerText="pause"
        timerStart();
    }
    document.getElementById('pauseTimer').style.backgroundColor="blue";
    document.getElementById('resetTimer').style.backgroundColor="blue";
};


function timerReset(){
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00';
    document.getElementById('pauseTimer').innerText="pause";
    document.getElementById('startTimer').disabled = false;
    document.getElementById('pauseTimer').disabled = false;
    document.getElementById('resetTimer').style.backgroundColor="red";
    document.getElementById('pauseTimer').style.backgroundColor="red";
    document.getElementById('startTimer').style.backgroundColor="blue";
    
};

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} `;
}
// function clicked(id){
//     document.getElementById(id).style.backgroundColor="red";
// }
