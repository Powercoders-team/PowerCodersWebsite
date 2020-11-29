var tabs = document.getElementsByClassName('tab');
for(let i = 0; i < tabs.length; i++){
    let children = tabs[i].children;
    for(let j = 0; j < children.length - 1; j++){
        children[j].onclick = function(){
            'use strict';
            tabs[i].lastElementChild.textContent = eval(this.dataset.message);
        }
    }
}
