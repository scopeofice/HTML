const http=require('http');
const url=require('url');
const fs=require('fs');
const m=require('./calc');

const server=http.createServer(function(req,resp){
    var q=url.parse(req.url,true)
    resp.writeHeader(200,{'content-type':'text/html'});
    switch(q.pathname){
        case '/form':
            var rs=fs.createReadStream('./Calculator.html');
            rs.pipe(resp);
            break;
        case '/submit-data':
            console.log(q);
    }
})
server.listen(3005,function(){console.log('server')})