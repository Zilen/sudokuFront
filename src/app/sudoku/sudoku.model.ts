export class SudokuModel {
    number : number;
    imutable : boolean;
    possibilities : number[];

    constructor(number : number) { 
        this.number = number;
        this.imutable = true;
    }
}