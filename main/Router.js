module.exports=function(config){
	var koa=require('koa'),
		app=koa(),
		router=require('koa-router'),
		views=require('co-views'),
		fs=require('fs'),
		Router=new router();
	//渲染模板函数
	var render=views(config.view,{
		default: 'jade'
	});
	//加载controller
	var index=require(config.controller+'/index.js')(config,render),
		auth=require(config.controller+'/auth.js')(config,render);
	//加载model
	fs.readdirSync(config.model).forEach(function (file) {
	  if (~file.indexOf('.js')) 
	  	require(config.model+ '/' + file)(config);
	});
	require('./common/dataSeed.js')();
	
	Router.get('/',index.index);
	Router.get('/login',auth.login);
	Router.get('/register',auth.register);
	Router.post('/login',auth.onlogin);
	app.use(Router.middleware());
	return app;
}	
