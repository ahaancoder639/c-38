class Form {
  constructor() {
    this.input = createInput("Name");
     this.button = createButton('Play');
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
  
    
    this.input.position(displayWidth/2,displayHeight/2 );
    this.button.position(displayWidth/2 + 10,displayHeight/2 + 50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      var name =  this.input.value();
      
      playerCount+=1;
      player.playerIndex = playerCount
      player.playerName = this.input.value();
      player.update()
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
