module.exports=function(root){
	return{
		mongodb:'mongodb://127.0.0.1:27017/blogdb',
		model:root+'/model/',
		view:root+'/view/',
		controller:root+'/controller/',
		secret:'1234!@#$',
		port:8080,
		template:{
			webtitle:'Notes',
		    articlesperpage:5,
			usernavs:[
		    {text:'最新',href:'/newblogs'},
		    {text:'精华',href:'/'},
		    {text:'我的博客',href:'/myblogs'},
		    {text:'发表',href:'/editblog'},
		    ],
		    guestnavs:[
		    {text:'最新',href:'/newblogs'},
		    {text:'精华',href:'/'}
		    ],
		    userfuncs:[
		    {text:'个人信息',href:'/'},
		    {text:'注销',href:'/logout'}
		    ],
		    guestfuncs:[
		    {text:'登陆',href:'/login'},
		    {text:'注册',href:'/register'}
		    ]
		}
	}
}