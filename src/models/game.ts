export class Game {
    public players: string[] = [];
    public stack: string[]  = [];
    public playedCard: string[]  = [];
    public currentPlayer: number  = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push(`spade_${i}`)
            this.stack.push(`hearts_${i}`)
            this.stack.push(`clubs_${i}`)
            this.stack.push(`diamonds_${i}`)    
        }

        shuffle(this.stack);
    }

    public toJson( ) {
        return {
            players: this.players,
            stack: this.stack,
            playedCard: this.playedCard,
            currentPlayer: this.currentPlayer
        };
    }
}


function shuffle(array: any) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };