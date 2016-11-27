var express =require("express");
var app = express();
//var port = 3000;
// var bodyParser = require("body-parser");
// var Sequelize = require("sequelize");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.set('port', (process.env.PORT || 3000));

// var sequelize = new Sequelize('myblog', 'root', null, {
//   host: 'localhost',
//   dialect: 'sqlite',
//   storage: './myblog.db'
// });

// var postBlog = sequelize.define('blogs', {
//   id:{type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
//   title:Sequelize.STRING,
//   msg:Sequelize.TEXT,
//   createDate:Sequelize.DATE
// });

// sequelize.sync();


// app.use(
//   bodyParser.urlencoded({extended:true })
// );

app.get('/', function (req, res){
res.render('index');

});
// app.get('/posts', function (req, res){
//   sequelize.sync().then(function(){
//   postBlog.findAll(
//   {order: 'title DESC'}).then(function(messages){
     
//         var postToBlog=messages;
//         console.log(postToBlog);
//         res.render('blog', {blog:postToBlog});
//     }); 
// });

//   });
// //receive route and send user to requested page
// app.get('/category/:posts', function (req, res){
//   var page = req.params.posts;
//   if(page == 'blog'){
//     res.redirect('/posts');
//   }
//   else{
//   res.render(page);
//     }
// });

// app.post('/send', function(req, res){
//   if (!req.body) return res.sendStatus(400);
//   //form submission from blog form
//   sequelize.sync().then(function(){
//     postBlog.create({
//       title:req.body.title,
//       msg:req.body.message,
//       createDate:new Date()
//     }); 
//   });

//   res.redirect('/posts');
// });

app.listen(app.get('port'), function(){
console.log('Server Started');
});