class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Multiplayer car race")
        title.position(500,100);

        var input=createInput("Kaustubh")
        var button=createButton("play")
        var greeting=createElement('h2')
        input.position(400,250)
        button.position(770,200)
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();    

      //  playerCount+=1;

       greeting.html("Welcome " +name)
       greeting.position(550,300)

        });
    }}