var express= require('express');
var app=express();
var path = require('path');
var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'duong..l',
    database : 'DuongTest',


});




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


app.get('/api/sinhviens',function (req,res) {
    connection.connect();

    connection.query('select * from sinh_vien',function (err, rows, fields) {
        console.log(err);
        res.send(rows);
    })
    
    connection.end();
})












