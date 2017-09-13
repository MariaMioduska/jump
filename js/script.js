'use strict'

var div = document.querySelector('div');
var divX = 0;
var divY = 550;

div.style.width = '300px';
div.style.height = '300px';
// div.style.backgroundColor = 'red';
// div.style.borderRadius = '20px';
// div.style.transitionDuration = '.5s';

div.style.position = 'fixed';
div.style.top = divY+'px';
div.style.left = divX+'px';

function setElementPosition(){
    div.style.top = divY+'px';
    div.style.left = divX+'px';
}
function changePosition(x,y){
    divX = divX + y;
    divY = divY + x;
}
function moveBottom(distance){
    changePosition(distance, 0);
    setElementPosition();
}
function moveTop(distance){
    moveBottom(-distance);
}
document.addEventListener('keydown', function(event){
    if(event.code === "ArrowDown") {
        moveBottom(50);
    }if(event.code === "Space"){
         var i= setInterval(function() {moveTop(10);}, 10);
         setTimeout(function () {
             clearInterval(i);
         }, 200);
         setTimeout(function () {
             i= setInterval(function() {moveBottom(10);}, 10);
             setTimeout(function () {clearInterval(i)}, 200);
         }, 500);

         }
});
