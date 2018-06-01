var request=require('request');
const querystring = require('querystring');
var Functions={
 
  hitApi:function(postData,query,method,type,req,res){
	eval("request."+method+"({"+
		"uri:'https://jsonplaceholder.typicode.com/"+type+"/'+query,"+
		"headers:{'content-type': 'application/x-www-form-urlencoded'},"+
		"body:querystring.stringify(postData)"+
		"},function(err,response,body){"+
       	"try{"+
	"var obj = JSON.parse(response.body);"+
	"console.log(obj);"+
	"res.json(obj);res.end();"+
	"}catch(err){"+
	"console.log(err.message);"+
	"res.json(err.message);res.end();"+
	"}"+
     "})");
    },
  hitApiResponse:function(postData,query,method,type,req,res){
	eval("request."+method+"({"+
		"uri:'https://jsonplaceholder.typicode.com/"+type+"/'+query,"+
		"headers:{'content-type': 'application/x-www-form-urlencoded'},"+
		"body:querystring.stringify(postData)"+
		"},function(err,response,body){"+
       	"try{"+
	"var obj = JSON.parse(response.body);"+
	"console.log(res.statusCode);"+
	"res.json(res.statusCode);"+
	"}catch(err){"+
	"console.log(err.message);"+
	"res.json(err.message);res.end();"+
	"}"+
     "})");
    }
	
 };

  module.exports=Functions;
