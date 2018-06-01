const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const request = require('request');
const Functions = require('../models/Functions') ;
///////////////////All Posts with filter
  router.get('/',(req, res, next) => {
	console.log('length=='+Object.keys(req.query).length);
	if(Object.keys(req.query).length){var query='?'+req.originalUrl.split('?')[1];
	}else{var query='';}
	var postData={};
	var method='get';
	var type='posts';
	Functions.hitApi(postData,query,method,type,req,res);
        });
///////////////////Add Post
	router.post('/',(req, res, next) => {
	var postData={
	userId: req.body.userId,
	id: req.body.id,
	title: req.body.title,
	body: req.body.body,
	};
	var method='post';
	var type='posts';
	Functions.hitApiResponse(postData,'',method,type,req,res);
		  
        });
///////////////////Edit Post
	router.post('/edit/:id',(req, res, next) => {
	var postData={
	id: req.params.id,
	userId: req.body.userId,
	title: req.body.title,
	body: req.body.body,
	};
	var method='put';
	var type='posts';
	Functions.hitApiResponse(postData,'',method,type,req,res);
		  
        });

///////////////////Post Delete
	router.get('/delete/:id',(req, res, next) => {
	var postData={
	id: req.params.id,
	
	};
	var method='delete';
	var type='posts';
	Functions.hitApiResponse(postData,'',method,type,req,res);
		  
        });
///////////////////Post Partial update
	router.get('/patch/:id',(req, res, next) => {
	var postData={
	id: req.params.id,
	title: req.query.title,
	
	};
	var method='patch';
	var type='posts';
	Functions.hitApiResponse(postData,'',method,type,req,res);
        });
///////////////////Particular Post's Comment
	router.get('/:postId/comments',(req, res, next) => {

	 request("https://jsonplaceholder.typicode.com/posts/"+req.params.postId+"/comments", function(error, response, body) {
       // res.json(body);
	
	try{
	var obj = JSON.parse(response.body);
	console.log(obj);
	res.json(obj);res.end();
	}catch(err){
	console.log(err.message);
	res.json(err.message);res.end();
	}
    });	  
        });
///////////////////Get Post by Id
	router.get('/:id',(req, res, next) => {
	request('https://jsonplaceholder.typicode.com/posts/'+req.params.id, function(error, response, body) {
       // res.json(body);
	var randomNUm =Math.floor(Math.random() * Math.floor(5));
	try{
	var obj = JSON.parse(response.body);
	obj.post_type=randomNUm;
	console.log(obj);
	res.json(obj);res.end();
	}catch(err){
	console.log(err.message);
	res.json(err.message);res.end();
	}
    });
		  
        });

			
  							 
module.exports = router;
