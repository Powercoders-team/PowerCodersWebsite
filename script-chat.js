document.getElementById('send').onclick = function(){
    'use strict';
    let messages = document.getElementById('messages');
    let textbox = document.getElementById('textbox');
    let namebox = document.getElementById('namebox');
    let newMessage = document.createElement('li');
    if(/^\s*$/.test(textbox.value)){
        alert('Message cannot be empty.');
        return;
    }
    if(/^\s*$/.test(namebox.value)){
        alert('Username cannot be empty.');
        return;
    }
    newMessage.textContent = namebox.value + ': ' + textbox.value;
    newMessage.className = 'chat-message';
    messages.appendChild(newMessage);
    textbox.value = '';
};
