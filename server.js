const express=require ('express');
const app=express();
const hbs = require ('hbs');


app.set('view engine', hbs);

let date=new Date();
let hrs= date.getHours();
app.use(hours=(req,res,next)=>{
  if (hrs<8 || hrs >17){res.render('closed.hbs')}
  else {res.render('home.hbs');
}
next();
})
app.get('/',  (req, res)=>{
  res.redirect('/home');
})
app.get('/home', (req,res)=>{
  res.render('home.hbs');
})
app.get('/services', (req,res)=>{
  res.render('ourservices.hbs');
})
app.get('/contact', (req,res)=>{
  res.render('contact.hbs');
})

app.listen(3000, (err)=>{
  if (err)console.log("Server on error")
  else console.log("Server running on port 3000")
})