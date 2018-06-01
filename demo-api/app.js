
const express = require('express')
const app = express();
//for logging incoming request
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req, res, next)=>{
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"
);

if(req.method==='OPTION'){
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, PATCH, DELETE');
    return res.status(200).json({});
}
next();
});


//Routing
const posts = require('./api/routes/posts');
const comments = require('./api/routes/comments');
const users = require('./api/routes/users');
const albums = require('./api/routes/albums');
const todos = require('./api/routes/todos');
const photos = require('./api/routes/photos');
//routes which handle requests
app.use('/posts',posts);
app.use('/comments',comments);
app.use('/users',users);
app.use('/albums',albums);
app.use('/todos',todos);
app.use('/photos',photos);

app.use((req, res, next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);
});
app.use((error,req, res, next)=>
{
res.status(error.status || 500);
res.json({
    error:error.message
})
});
module.exports = app;
