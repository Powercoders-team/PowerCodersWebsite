var quizzes = document.getElementsByClassName('quiz');
for(let i = 0; i < quizzes.length; i++){
    let children = quizzes[i].children;
    let correct = quizzes[i].dataset.correct;
    for(let j = 0; j < children.length; j++){
        children[j].onclick = function(){
            'use strict';
            if(this.dataset.quizval === correct){
                alert('Correct!');
            }
            else{
                alert('Incorrect.');
            }
        }
    }
}
