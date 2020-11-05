var tab_buttons = document.getElementsByClassName('tab-button');
for(var i = 0; i < tab_buttons.length; i++){
    tab_buttons[i].onclick = function(){
        'use strict';
        let parent = this.parentNode;
        parent.lastElementChild.innerHTML = eval(this.dataset.message);
        // TODO: this                       ^^^^ is probably unsafe. Change so it doesn't use eval.
    }
}
