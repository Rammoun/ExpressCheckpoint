const express=require ('express');
const app=express();
const hbs = require ('hbs');


app.set('view engine', hbs);

let date=new Date();
let hrs= date.getHours();
app.get('/',  (req, res)=>{
  if (hrs<8 || hrs >17){res.redirect('/closed')}
  else res.redirect('/home')
})
app.get('/closed', (req,res)=>{
  res.render('closed.hbs');
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