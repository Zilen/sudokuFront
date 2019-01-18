export class SudokuModel {
    number : number;
    imutable : boolean;
    possibilities : number[];
    cor :string;
    colorir : boolean = false;

    
    constructor(number : number, imutable? : boolean) { 
        this.number = number;
        this.imutable =imutable == undefined ? false : imutable;
        this.cor = 'white';
    }
}