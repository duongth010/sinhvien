var express= require('express');
var app=express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'controllers')));
app.listen(3000,function(){
    console.log('server is running');
});
 app.set('views', './views');
 app.set('view engine', 'ejs');



app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/api/getSinhViens',function (req,res) {
    var sinhvien={
        sid:1,
        name:'Tao Hoai Duong',
        number:'0169 666 0204',
        email:'hoaiduong1012@gmail.com'

    }

    res.send(JSON.stringify(sinhvien));
});



app.get('/api/hello',function (req,res) {


    res.send('xin chao cac ban');
})



