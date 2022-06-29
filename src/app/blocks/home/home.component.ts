
import { Store } from '@ngrx/store';
import {  ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {  takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneBookModel } from 'src/app/shared/model/phone.book.model';
import { PhoneBookService } from 'src/app/shared/services/phone-bookservice';
import { Subject } from 'rxjs';
import { LoadPhoneBookInfoAction, SubmitPhoneBookAction } from 'src/app/state/actions/phone-book.action';
import { getPhoneBookInfoSelector } from 'src/app/state/selector/phone-book.selector';



@Component({
    selector: 'pb-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    phonemodel = new PhoneBookModel('', '');
    phoneBookForm!: FormGroup;
    private unsubscribe$ = new Subject();
    public ngDestroyed$ = new Subject();
    phoneBookData : any[]  = [];
    value: Date;

    constructor(
        private store: Store<any>,
        private cdr: ChangeDetectorRef,
        private formBuilder: FormBuilder,
        private pbService: PhoneBookService
    ) {
        this.store.dispatch(
            new  LoadPhoneBookInfoAction({})
        );

    }

    ngOnInit(): void {
        this.phoneBookForm = this.formBuilder.group({
            name: ["", [Validators.required]],
            PhoneNumber: ["", [Validators.required]],
          });
          this.store
            .select(getPhoneBookInfoSelector)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(payload => {
                this.phoneBookData = payload;

            });

    }

    addTophoneBook(){
        this.phonemodel.name = this.phoneBookForm.value.name;
        this.phonemodel.phoneNumber = this.phoneBookForm.value.PhoneNumber;
        this.store.dispatch(new SubmitPhoneBookAction(this.phonemodel));
    }

    addPhone(){
        this.phonemodel.name = this.phoneBookForm.value.name;
        this.phonemodel.phoneNumber = this.phoneBookForm.value.PhoneNumber;
        this.pbService.addPhoneBook(this.phonemodel)
        .subscribe((data) => {
          const key = data;
        });
    }

    ngOnDestroy(): void {
        // this.unsubscribe$.next();
        this.unsubscribe$.complete();

        // this.ngDestroyed$.next();
        this.ngDestroyed$.complete();
        this.ngDestroyed$.unsubscribe();
    }
}
