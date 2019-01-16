import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:  'root'
    })
export class APIClient {
    API_URL  =  'http://localhost:3000';
    constructor(private  httpClient:  HttpClient) {}
    get(url, object){
        return  this.httpClient.get(`${this.API_URL}/${url}`, [], object);
    }
    post(url, body){
        return  this.httpClient.post(`${this.API_URL}/${url}`, body);
    }
}