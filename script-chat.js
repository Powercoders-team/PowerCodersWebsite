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
    newMessage.innerHTML = '<p>' + (namebox.value + ': ' + textbox.value).replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>';
    newMessage.className = 'chat-message';
    messages.appendChild(newMessage);
    textbox.value = "";
};

// Message: </p><h1 onclick='location.href="https://www.disney.com.au"'>Click Me!</h1><p>
