console.log('Loaded!');

//change the text of the main-text div
var element=document.getElementById('main-text');

element.innerHTML='New value';

//Move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+'px';
}
img.onclick=function(){
   var interval=setInterval(moveRight,100);
};