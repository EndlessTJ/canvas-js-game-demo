window.onload=function () {
    var canvas=document.querySelector("canvas");
    var start=document.querySelector(".start");
    var cxt=canvas.getContext("2d");
    var clientW=document.documentElement.clientWidth;
    var clientH=document.documentElement.clientHeight;
    var runs=document.querySelectorAll(".run");
    var jumps=document.querySelectorAll(".jump");
    var roadObj=document.querySelectorAll(".roadblock");
    var bullet=document.querySelectorAll(".zidan");
    var audio=document.querySelectorAll(".audio");
    var audioBtnOn=document.querySelector(".audio-on");
    var audioBtnOff=document.querySelector(".audio-off");
    var startBtn=document.querySelector(".start-btn");
    var exitBtn=document.querySelector(".exit-btn");
    var tips=document.querySelector(".tips");



    canvas.width=clientW;
    canvas.height=clientH;
    var gamePlay=new game(canvas,cxt,runs,jumps,roadObj,bullet,audio);
    start.style.height=clientH+"px";
    startBtn.onclick=function () {
        start.style.top=-100+"%";
        setTimeout(function () {
            gamePlay.play();
            gamePlay.key();
            gamePlay.mouse()
        },2000)

    };

    

    



    
};