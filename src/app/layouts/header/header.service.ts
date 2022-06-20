import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pbApplicationlabel } from 'src/app/shared/util/constants/labels.constant';

@Injectable({
    providedIn: 'root',
})
export class HeaderService {
    private helpVisibility = new BehaviorSubject<boolean>(true);
    currentStatus = this.helpVisibility.asObservable();
    private headerTitle = new BehaviorSubject<string>(pbApplicationlabel);
    header = this.headerTitle.asObservable();

    constructor() {}

    setHelpVisibility(val: boolean): void {
        this.helpVisibility.next(val);
    }

    setHeaderTitle(val: string): void {
        this.headerTitle.next(val);
    }
}