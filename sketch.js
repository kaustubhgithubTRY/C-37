var  database;
var position;
var player,form,game


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  form=new Form();
  form.display();
 
}

function draw(){
  background("yellow");
  
}
