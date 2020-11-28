document.getElementById('send').onclick = function(){
    "use strict";
    let messages = document.getElementById("messages");
    let textbox = document.getElementById("textbox");
    let namebox = document.getElementById("namebox");
    let newMessage = document.createElement("li");
    if(/^\s*$/.test(textbox.value)){
        alert('Message cannot be empty.');
        return;
    }
    newMessage.textContent = namebox.value + ': ' + textbox.value;
    newMessage.className = 'chat-message';
    messages.appendChild(newMessage);
    textbox.value = "";
};

// Message: </p><h1 onclick='location.href="https://www.disney.com.au"'>Click Me!</h1><p>
