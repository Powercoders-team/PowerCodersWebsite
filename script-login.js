document.getElementById('change').onclick = function(){
    if(this.innerHTML.startsWith('D')){
        document.getElementById('login-box').innerHTML = `<h2>Sign up</h2>
        Username <input type='text' placeholder='Username'><br>
        Password <input type='password' placeholder='Password'><br>
        Password (confirm) <input type='password' placeholder='Password Again'><br>
        <button>Login</button>`;
        this.innerHTML = 'Have an account?';
    }
    else{
        document.getElementById('login-box').innerHTML = `<h2>Login</h2>
        Username <input type='text' placeholder='Username'><br>
        Password <input type='password' placeholder='Password'><br>
        <button>Login</button>`;
        this.innerHTML = 'Don\'t have an account?';
    }
};