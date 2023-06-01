const express = require('express');
const app = express();
const path=require('path');

app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,'loginform.html'));
});


const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' }
];

app.get('/validateuser', function(req, res) {
    const { uname, passwd } = req.query;
  
    if (!uname || !passwd) {
      res.sendFile(path.join(__dirname, 'failure.html'));
    } else if (passwd.length < 6) {
      res.sendFile(path.join(__dirname, 'failure.html'));
    } else {
      const user = users.find(u => u.username === uname && u.password === passwd);
      if (user) {
        res.sendFile(path.join(__dirname, 'success.html'));
      } else {
        res.sendFile(path.join(__dirname, 'failure.html'));
      }
    }
  });
  
app.listen(3011, function(){
  console.log('Server 3011');
});
