import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
    configUrl = 'https://jsonplaceholder.typicode.com/users';
    private messageSource = new BehaviorSubject('');
    currentMessage = this.messageSource.asObservable();

    constructor(private http: HttpClient) { }

    changeMessage(message: string) {
        this.messageSource.next(message);
    }
    getservice() {
        return this.http.get(this.configUrl);
    }

}
