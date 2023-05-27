class Game{
    end;
    parent;
    grid = [];
    constructor(end, parent){
        this.end = end;
        this.parent = parent;

        for(var i = 0; i < 4; i++){
            this.grid.push([]);
            for(var j = 0; j < 4; j++){
                grid[i][j] = 0;
            }
        }


    }
    displayGrid(){
        
    }   
}