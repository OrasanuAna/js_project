let username;

document.getElementById('submitbutton').onclick = function() {
  username = document.getElementById('username').value;
  document.getElementById('h1').textContent = 'Welcome ' + username;
};

