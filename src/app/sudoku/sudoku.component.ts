import { SudokuService } from './sudoku.service';
import { Component, OnInit } from '@angular/core';
import { SudokuModel } from './Sudoku.model';
import { isNumber } from 'util';


@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit {

  public numbers: SudokuModel[][];
  public completeNumbers: SudokuModel[][];
  public numbersLoaded: boolean;
  sudokuComponent: SudokuModel;
  dificuldade : number = 62;

  constructor(private sudokuService: SudokuService) { }

  loadNumbers() {
    this.limpar()
    this.sudokuService.getNumbers().subscribe((response) => {
      for (let u = 0; u < 9; u++) {
        this.numbers[u] = [];
        for (let i = 0; i < 9; i++) {
          if(this.getChance(this.dificuldade)) {
            this.numbers[u][i] = (new SudokuModel(response[(u*9) + i], true));
            this.completeNumbers[u][i] = (new SudokuModel(response[(u*9) + i], true));  
          } else {
            this.numbers[u][i] = (new SudokuModel(null, false));
            this.completeNumbers[u][i] = (new SudokuModel(response[(u*9) + i], false));
          }
          this.resetColor(this.numbers[u][i]);
          this.resetColor(this.completeNumbers[u][i]);
        }
      }
      this.numbersLoaded = true;
    });
  }

  ngOnInit() {
    this.loadNumbers();
  }

  bunda(index, indexLinha) {
    let gatoCancer = '';
    gatoCancer += ' ' + ((index + 1) % 3 == 0 ? 'direitaForte' : 'direitaNormal');
    if (index + 1 == 1) {
      gatoCancer += ' ' + 'esquerdaForte';
    }
    gatoCancer += ' ' + ((indexLinha + 1) % 3 == 0 ? 'baixoForte' : 'baixoNormal');
    if (indexLinha + 1 == 1) {
      gatoCancer += ' ' + 'cimaForte';
    }

    return gatoCancer;
  }

  exibir() {
    alert(this.numbers[0][0].number);
  }

  limpar() {
    this.numbersLoaded = false;
    this.numbers = [];
    this.completeNumbers = [];
    for (let u = 0; u < 9; u++) {
      this.numbers[u] = [];
      this.completeNumbers[u] = [];
      for (let i = 1; i < 10; i++) {
        this.numbers[u][i - 1] = (new SudokuModel(null));
        this.completeNumbers[u][i - 1] = (new SudokuModel(null));
      }
    }
  }

  getNumbers() {
    //this.sudokuServiceg.
  }

  colorir(x) {
    var y = parseInt(x);
    this.numbers.forEach(value => {
      value.forEach ( n => {
        if (n.number != y) {
          this.resetColor(n)
        }
       console.log(isNumber(n.number));
        if (isNumber(y) && n.number == y) {
          this.setBlue(n)
        }
      });
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  setBlue(n) {
    if ( n.cor == 'blue') {
      this.resetColor(n)
    } else {
      n.cor = 'blue';
      n.colorir = true;
    }
  } 

  resetColor(n : SudokuModel) {
    if (n.imutable) {
      n.colorir = true;
      n.cor = 'grey';
    } else {
      n.colorir = false;
      n.cor = 'white';
    }
  }

  getChance(chance) : boolean {
    return (Math.floor(Math.random() * (100 - 1 + 1)) + 1) <= chance;
}
  setDifficulty(x) {
    console.log(event)
    event.target;
  }

  showAwnser() {
    console.log(this.completeNumbers);
    this.numbers = this.completeNumbers;
    
  }

  hideAwnsers() {

  }
}
