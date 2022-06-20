import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { PhoneBookModel } from '../model/phone.book.model';

@Injectable({ providedIn: 'root' })
export class PhoneBookService {
    constructor(private http: HttpClient) {}

    public addPhone(body: PhoneBookModel): Observable<any> {
        console.log("@@@@@ PhoneBookService @@@@", body);
        return this.http.post(`${environment.BASE_URL}/phone-book`, body).pipe(
            map(response => {
                return response;
            })
        );
    }

    public addPhoneBook(body: PhoneBookModel){
        return this.http.post(`${environment.BASE_URL}/phone-book`, JSON.stringify(body));
    }

    public getPhoneBook(): Observable<any[]>{
        return this.http
        .get<any>(`${environment.BASE_URL}/phone-book`, {
            observe: 'response',
        })
        .pipe(
            map(response => {
                return response.body;
            })
        );
    }
}
