class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
    }
    hide() {
        
        this.button.hide();
        this.input.hide();
        
    }
    display() {
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.input.position(windowWidth/2.53,windowHeight/1.4);
        this.button.position(windowWidth/2.49,windowHeight/1.2);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
       
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            gameState=1
          })

        
    }
}