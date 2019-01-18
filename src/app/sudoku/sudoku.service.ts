import { SudokuModel } from './sudoku.model';
import { HttpClient } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { APIClient } from './../API/api.client';


@Injectable()
export class SudokuService {
    constructor(private httpClient: HttpClient, private apiCliente : APIClient) {  }

    getNumbers() {
        return this.apiCliente.get("sudoku", null)
}
}