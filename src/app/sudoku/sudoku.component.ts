import { SudokuService } from './sudoku.service';
import { Component, OnInit } from '@angular/core';
import { SudokuModel } from './Sudoku.model';


@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit {

  public numbers: SudokuModel[][];
  public numbersLoaded : boolean;
  sudokuComponent: SudokuModel;


  constructor(private sudokuService : SudokuService) { }

  loadNumbers() {
    this.numbersLoaded = false;
    this.numbers = [];
    for (let u = 0; u < 9; u++) {
      this.numbers[u] = [];
        for (let i = 1; i < 10; i++) {
          this.numbers[u][i-1] = (new SudokuModel(null));
        }
      }
     this.sudokuService.getNumbers().subscribe((response) => {
      let numbers : SudokuModel[][];
      for (let u = 0; u < 9; u++) {
        this.numbers[u] = [];
          for (let i = 1; i < 10; i++) {
            this.numbers[u][i-1] = (new SudokuModel(response[u+i]));
          }
      }
      this.numbersLoaded = true;
  });
  }

  ngOnInit() {
    this.loadNumbers();

    console.log("ok!")
    //    this.numbers = [[1,2,5,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9],
    //                  [1,2,5,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9],
    //                 [1,2,5,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9]];
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


    console.log(gatoCancer);
    return gatoCancer;
  }

exibir() {
  alert(this.numbers[0][0].number);
}

getNumbers() {
  this.sudokuService.g
}
}
