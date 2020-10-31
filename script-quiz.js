var quiz_buttons = document.getElementsByClassName('quiz-button');
for(var i = 0; i < quiz_buttons.length; i++){
    quiz_buttons[i].onclick = function(){
        'use strict';
        let parent = this.parentNode;
        let correct = parent.dataset.correct;
        if(this.id === correct){
            alert('Correct!');
        }
        else{
            alert('Incorrect.');
        }
    }
}
