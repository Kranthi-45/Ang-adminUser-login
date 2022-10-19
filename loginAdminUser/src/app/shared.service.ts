import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {
    public subject = new Subject<any>();

    search(value:any) {
        this.subject.next({ text: 'loggedIn...', value: value});
    }

    getMessage(): Observable<any> {
       return this.subject.asObservable();
    }

}