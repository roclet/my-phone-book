import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    private loader$: BehaviorSubject<any> = new BehaviorSubject<any>(false);
    private headingFirstLine$: BehaviorSubject<string> = new BehaviorSubject<any>('');
    private headingSecondLine$: BehaviorSubject<string> = new BehaviorSubject<any>('');
    private subHeading$: BehaviorSubject<string> = new BehaviorSubject<any>('');
    private src$: BehaviorSubject<string> = new BehaviorSubject<any>('');

    constructor() {}

    // Show loader
    show(headingFirstLine?: string, headingSecondLine?: string, subHeading?: string, image?: string): void {
        this.headingFirstLine$.next(headingFirstLine || '');
        this.headingSecondLine$.next(headingSecondLine || '');
        this.subHeading$.next(subHeading || '');
        this.src$.next(image || '');
        this.loader$.next(true);
    }

    // Hide loader
    hide(): void {
        this.headingFirstLine$.next('');
        this.headingSecondLine$.next('');
        this.subHeading$.next('');
        this.src$.next('');
        this.loader$.next(false);
    }

    getLoader(): Observable<any> {
        return this.loader$.asObservable();
    }

    getFirstLineHeading(): Observable<any> {
        return this.headingFirstLine$.asObservable();
    }

    getSecondLineHeading(): Observable<any> {
        return this.headingSecondLine$.asObservable();
    }

    getSubHeading(): Observable<any> {
        return this.subHeading$.asObservable();
    }

    getSrc(): Observable<any> {
        return this.src$.asObservable();
    }
}