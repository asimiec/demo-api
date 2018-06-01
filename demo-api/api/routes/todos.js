
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const request = require('request');
const Functions = require('../models/Functions') ;
///////////////////All Posts
  router.get('/',(req, res, next) => {
	console.log('length=='+Object.keys(req.query).length);
	if(Object.keys(req.query).length){var query='?'+req.originalUrl.split('?')[1];
	}else{var query='';}
	var postData={};
	var method='get';
	var type='todos';
	Functions.hitApi(postData,query,method,type,req,res);  
		  
        });
  							 
module.exports = router;
