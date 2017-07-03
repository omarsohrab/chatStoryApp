var chat_lines = document.getElementById('story-line');
var nextbtn = document.getElementById('btn');

nextbtn.addEventListener("click",function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
    myRequest.onload = function(){
        var story = JSON.parse(myRequest.responseText);
        getStoryLine();
    };
    myRequest.send();
});

function getStoryLine(){
    chat_lines.insertAdjacentHTML('beforeend','sddyh');
}